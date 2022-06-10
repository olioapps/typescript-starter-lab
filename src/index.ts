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
    if (Object.values(this._users).some(x => x.name.toLowerCase() === user.name.toLowerCase() && x.favoriteColor.toLowerCase() === x.favoriteColor.toLowerCase() && x.age === user.age)) {
      throw new Error("User with these properties already exists")
    }
    const copyOfAPIUsers = { ...this._users, [id]: { ...user, id: id } }
    this._users = { ...copyOfAPIUsers }
    return { ...user, id: id }
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
      return Object.values(this._users)
    }
  }

  deleteUserById(id: string): IUser {
    if (!this._users[id]) {
      throw new Error("User was not found")
    } else {
      const { [id]: userToDelete, ...updatedArray } = this._users
      this._users = { ...updatedArray }
      return { ...userToDelete }
    }
  }

  searchUserByName(name: string): Array<IUser> {
    const userResult: Array<IUser> = Object.values(this._users).filter(x => x["name"].toLowerCase() === name.toLowerCase())
    if (userResult.length) {
      return [...userResult]
    } else {
      throw new Error("User(s) not found")
    }
  }

  searchUsersByFavoriteColor(color: string): Array<IUser> {
    const userResult = Object.values(this._users).filter(x => x["favoriteColor"].toLowerCase() === color.toLowerCase())
    if (userResult.length) {
      return [...userResult]
    } else {
      throw new Error("User(s) not found")
    }
  }
}
