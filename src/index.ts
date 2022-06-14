export interface IUser {
  name: string
  favoriteColor: string
  age: number
  readonly id?: string
}

export class UserAPI {

  constructor(private _users: Record<string, IUser> = {}) {

  }

  addUser(user: IUser): IUser {
    const id: Readonly<string> = Date.now().toString()
    if (user.hasOwnProperty("id")) {
      throw new Error("Id incorrectly provided by input user")
    }
    if (Object.values(this._users).some(
      x => x.name.toLowerCase() === user.name.toLowerCase() &&
        x.favoriteColor.toLowerCase() === x.favoriteColor.toLowerCase() &&
        x.age === user.age
    )) {
      throw new Error("User with these properties already exists")
    }
    this._users = { ...this._users, [id]: { ...user, id: id } }
    return { ...user, id: id }
  }

  getUserById(id: string): Readonly<IUser> {
    if (this._users[id]) {
      return { ...this._users[id] }
    } else {
      throw new Error("User was not found")
    }
  }

  getUsers(): ReadonlyArray<IUser> {
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

  searchUserByName(name: string): ReadonlyArray<IUser> {
    const userResult: ReadonlyArray<IUser> = Object.values(this._users).filter(x => x["name"].toLowerCase() === name.toLowerCase())
    if (userResult.length) {
      return [...userResult]
    } else {
      throw new Error("User(s) not found")
    }
  }

  searchUsersByFavoriteColor(color: string): ReadonlyArray<IUser> {
    const userResult: ReadonlyArray<IUser> = Object.values(this._users).filter(x => x["favoriteColor"].toLowerCase() === color.toLowerCase())
    if (userResult.length) {
      return [...userResult]
    } else {
      throw new Error("User(s) not found")
    }
  }
}
