interface User {
  name: string
  favoriteColor: string
  age: number
  id?: string
}

export class UserAPI {
  private _users: Array<User>

  constructor(users: Array<User> = []) {
    this._users = [...users]
  }

  addUser(user: User) {
    if (!user.hasOwnProperty("id")) {
      const existingUser = this._users.find(
        x => x.name === user.name
          && x.favoriteColor === user.favoriteColor
          && x.age === user.age)
      if (existingUser !== undefined) {
        throw new Error("User with these properties already exists")
      }
      let userToAdd = { ...user }
      userToAdd.id = Date.now().toString()
      const newArray = [...this._users, { ...userToAdd }]
      this._users = [...newArray]
      return { ...userToAdd }
    } else {
      throw new Error("Id incorrectly provided by input user")
    }
  }

  getUserById(id: string) {
    const user = this._users.find(x => x.id === id)
    if (user !== undefined) {
      return { ...user }
    } else {
      throw new Error("User was not found")
    }
  }

  getUsers() {
    if (!this._users) {
      throw new Error("There is an issue with the users array")
    } else {
      return [...this._users]
    }
  }

  deleteUserById(id: string) {
    const userIndex = this._users.findIndex(x => x.id === id)
    if (userIndex >= 0) {
      const userToDelete = { ...this._users[userIndex] }
      const newArray = [...this._users.filter(x => x.id !== id)]
      this._users = [...newArray]
      return { ...userToDelete }
    } else {
      throw new Error("User was not found")
    }
  }

  searchUserByName(name: string) {
    const userResult = this._users.filter(x => x.name.toLowerCase() === name.toLowerCase())
    if (userResult.length) {
      return [...userResult]
    } else {
      throw new Error("User(s) not found")
    }
  }

  searchUsersByFavoriteColor(color: string) {
    const userResult = this._users.filter(x => x.favoriteColor.toLowerCase() === color.toLowerCase())
    if (userResult.length) {
      return [...userResult]
    } else {
      throw new Error("User(s) not found")
    }
  }
}
