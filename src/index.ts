interface User {
  name: string
  favoriteColor: string
  age: number
}

export class UserAPI {
  private _users: { [key: string]: { name: string, favoriteColor: string, age: number } }

  constructor(users: { [key: string]: { name: string, favoriteColor: string, age: number } } = {}) {
    this._users = { ...users }
  }

  addUser(user: User) {
    const id = Date.now().toString()
    let copyOfUsers = { ...this._users }
    if (user.hasOwnProperty("id")) {
      throw new Error("Id incorrectly provided by input user")
    }
    Object.values(copyOfUsers).map((entry) => {
      if (entry.name === user.name && entry.favoriteColor === user.favoriteColor && entry.age === user.age) {
        throw new Error("User with these properties already exists")
      }
    })
    copyOfUsers[id] = { ...user }
    this._users = { ...copyOfUsers }
    return { ...copyOfUsers[id] }
  }

  // getUserById(id: string) {
  //   const user = this._users.find(x => x.id === id)
  //   if (user !== undefined) {
  //     return { ...user }
  //   } else {
  //     throw new Error("User was not found")
  //   }
  // }

  getUsers() {
    if (!this._users) {
      throw new Error("There is an issue with the users array")
    } else {
      return { ...this._users }
    }
  }

  // deleteUserById(id: string) {
  //   const userIndex = this._users.findIndex(x => x.id === id)
  //   if (userIndex >= 0) {
  //     const userToDelete = { ...this._users[userIndex] }
  //     const newArray = [...this._users.filter(x => x.id !== id)]
  //     this._users = [...newArray]
  //     return { ...userToDelete }
  //   } else {
  //     throw new Error("User was not found")
  //   }
  // }

  // searchUserByName(name: string) {
  //   const userResult = this._users.filter(x => x.name.toLowerCase() === name.toLowerCase())
  //   if (userResult.length) {
  //     return [...userResult]
  //   } else {
  //     throw new Error("User(s) not found")
  //   }
  // }

  // searchUsersByFavoriteColor(color: string) {
  //   const userResult = this._users.filter(x => x.favoriteColor.toLowerCase() === color.toLowerCase())
  //   if (userResult.length) {
  //     return [...userResult]
  //   } else {
  //     throw new Error("User(s) not found")
  //   }
  // }
}

const x = new UserAPI()
x.addUser({ name: 'Larry', favoriteColor: 'gray', age: 544 })
x.addUser({ name: 'Larry', favoriteColor: 'grey', age: 51 })
x.addUser({ name: 'Larry', favoriteColor: 'grey', age: 542 })
x.addUser({ name: 'Larry', favoriteColor: 'grey', age: 541 })
x.addUser({ name: 'Larry', favoriteColor: 'grey', age: 54 })
// console.log(x.getUsers())
x.addUser({ name: 'Bob', favoriteColor: 'gray', age: 544 })
// console.log(x.getUsers())
