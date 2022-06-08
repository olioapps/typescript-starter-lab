interface User {
  name: string
  favoriteColor: string
  age: number
  id?: number
}

class UserAPI {
  private _users: Array<User>
  private _currentId: number

  constructor() {
    this._users = []
    this._currentId = 1
  }

  private assignId() {
    this._currentId++
    return this._currentId - 1
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
      user.id = this.assignId()
      this._users.push(user)
      return user
    } else {
      throw new Error("Id incorrectly provided by input user")
    }
  }

  getUserById(id: number) {
    const user = this._users.find(x => x.id === id)
    if (user !== undefined) {
      return user
    } else {
      throw new Error("User was not found")
    }
  }

  getUsers() {

  }

  deleteUserById(id: number) {

  }

  searchUserByName(name: string) {

  }
}

const x = new UserAPI()

const user = {
  name: "Daniel",
  favoriteColor: "purple",
  age: 33,
}
console.log(`Test:
Should add a user object to UserAPI object x, and assign an Id of 1
`)
console.log(`Expect:
{name: 'Daniel', favoriteColor: 'purple', age: 33, id: 1}
`)
console.log("Result:")
try {
  x.addUser(user)
  console.log(user)
} catch (e: any) {
  console.log(e.message)
}
console.log("--------------------------------------------------------------------")

const userTwo = {
  name: "Bob",
  favoriteColor: "green",
  age: 102
}
console.log(`Test:
Should add a user to UserAPI object x, and assign an Id of 2
`)
console.log(`Expect:
{name: 'Bob', favoriteColor: 'green', age: 102, id: 2}
`)
console.log("Result:")
try {
  x.addUser(userTwo)
  console.log(userTwo)
} catch (e: any) {
  console.log(e.message)
}
console.log("--------------------------------------------------------------------")


const userTwoDuplicateId = {
  name: "Steve",
  favoriteColor: "yellow",
  age: 17,
  id: 2
}
console.log(`Test:
Error when adding object that contains an id
`)
console.log(`Expect:
Id incorrectly provided by input user
`)
console.log("Result:")
try {
  x.addUser(userTwoDuplicateId)
  console.log(userTwoDuplicateId)
} catch (e: any) {
  console.log(e.message)
}
console.log("--------------------------------------------------------------------")

const userTwoDuplicateUserProps = {
  name: "Bob",
  favoriteColor: "green",
  age: 102
}

console.log(`Test:
Error when adding user with same properties as existing user
`)
console.log(`Expect:
User with these properties already exists
`)
console.log("Result:")
try {
  x.addUser(userTwoDuplicateUserProps)
  console.log(userTwoDuplicateUserProps)
} catch (e: any) {
  console.log(e.message)
}
console.log("--------------------------------------------------------------------")

console.log(`Test:
Should successfully find user based on id
`)
console.log(`Expect:
{name: 'Bob', favoriteColor: 'green', age: 102, id: 2}
`)
console.log("Result")
try {
  console.log(x.getUserById(2))
} catch (e: any) {
  console.log(e.message)
}
console.log("--------------------------------------------------------------------")


console.log(`Test:
Error when locating a user by an id that doesn't exist in the x UserAPI class
`)
console.log(`Expect:
User was not found
`)
console.log("Result")
try {
  console.log(x.getUserById(9))
} catch (e: any) {
  console.log(e.message)
}
console.log("--------------------------------------------------------------------")
