export interface IUser {
  name: string
  favoriteColor: string
  age: number
  id?: string
}

export class UserAPI {

  constructor(private _users: { [key: string]: IUser } = {}) {

  }

  addUser(user: IUser): IUser {
    const id: string = Date.now().toString()
    if (user.hasOwnProperty("id")) {
      throw new Error("Id incorrectly provided by input user")
    }
    Object.values(this._users).map((userObj) => {
      if (userObj.name.toLowerCase() === user.name.toLowerCase() && userObj.favoriteColor.toLowerCase() === user.favoriteColor.toLowerCase() && userObj.age === user.age) {
        throw new Error("User with these properties already exists")
      }
    })
    const copyOfAPIUsers: { [key: string]: IUser } = { ...this._users }
    const newUser: IUser = { ...user, id: id }
    copyOfAPIUsers[id] = { ...newUser }
    this._users = { ...copyOfAPIUsers }
    return { ...newUser }
  }

  getUserById(id: string): IUser {
    if (this._users[id]) {
      return { ...this._users[id] }
    } else {
      throw new Error("User was not found")
    }
  }

  getUsers(): Array<IUser> {
    if (!this._users) {
      throw new Error("There is an issue with the users object")
    } else {
      return Object.values({ ...this._users })
    }
  }

  deleteUserById(id: string): IUser {
    if (!this._users[id]) {
      throw new Error("User was not found")
    } else {
      const userToDelete: IUser = { ...this._users[id] }
      const updatedArray: { [key: string]: IUser } = { ...this._users }
      delete updatedArray[id]
      this._users = { ...updatedArray }
      return { ...userToDelete }
    }
  }

  searchUserByName(name: string): Array<IUser> {
    const copyOfUsers: { [key: string]: IUser } = { ...this._users }
    const userResult: Array<IUser> = Object.values(copyOfUsers).filter(x => x["name"].toLowerCase() === name.toLowerCase())
    if (userResult.length) {
      return [...userResult]
    } else {
      throw new Error("User(s) not found")
    }
  }

  searchUsersByFavoriteColor(color: string): Array<IUser> {
    const copyOfUsers: { [key: string]: IUser } = { ...this._users }
    const userResult: Array<IUser> = Object.values(copyOfUsers).filter(x => x["favoriteColor"].toLowerCase() === color.toLowerCase())
    if (userResult.length) {
      return [...userResult]
    } else {
      throw new Error("User(s) not found")
    }
  }
}
