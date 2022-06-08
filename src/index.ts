interface User {
  name: string
  favoriteColor: string
  age: number
  id?: string
}

export class UserAPI {
  private _users: Array<User>

  constructor(users: Array<User> = []) {
    this._users = users
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
      user.id = Date.now().toString()
      this._users.push(user)
      return user
    } else {
      throw new Error("Id incorrectly provided by input user")
    }
  }

  getUserById(id: string) {
    const user = this._users.find(x => x.id === id)
    if (user !== undefined) {
      return user
    } else {
      throw new Error("User was not found")
    }
  }

  getUsers() {
    if (!this._users) {
      throw new Error("There is an issue with the users array")
    } else {
      return this._users
    }
  }

  deleteUserById(id: string) {
    const userIndex = this._users.findIndex(x => x.id === id)
    if (userIndex > 0) {
      const deletedUser = this._users[userIndex]
      this._users.splice(userIndex, 1)
      return deletedUser
    } else {
      throw new Error("User was not found")
    }
  }

  searchUserByName(name: string) {
    const userResult = this._users.filter(x => x.name.toLowerCase() === name.toLowerCase())
    if (userResult.length) {
      return userResult
    } else {
      throw new Error("User(s) not found")
    }
  }

  searchUsersByFavoriteColor(color: string) {
    const userResult = this._users.filter(x => x.favoriteColor.toLowerCase() === color.toLowerCase())
    if (userResult.length) {
      return userResult
    } else {
      throw new Error("User(s) not found")
    }
  }
}
const seedData = [
  { name: 'Larry', favoriteColor: 'gray', age: 544, id: "1" },
  { name: 'Tom', favoriteColor: 'pink', age: 4, id: "2" },
  { name: 'Phil', favoriteColor: 'red', age: 44, id: "3" }
]
const x = new UserAPI(seedData)

const user = {
  name: "Daniel",
  favoriteColor: "purple",
  age: 33,
}
console.log(`Test:
Should add a user object to UserAPI object x, and assign an Id of Date.now().toString()
`)
console.log(`Expect:
{name: 'Daniel', favoriteColor: 'purple', age: 33, id: Date.now().toString()}
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
Should add a user to UserAPI object x, and assign an Id
`)
console.log(`Expect:
{name: 'Bob', favoriteColor: 'green', age: 102, id: Date.now().toString()}
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
  id: "2"
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
{name: 'Larry', favoriteColor: 'gray', age: 544, id: "1"}
`)
console.log("Result")
try {
  console.log(x.getUserById("1"))
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
  console.log(x.getUserById("9"))
} catch (e: any) {
  console.log(e.message)
}
console.log("--------------------------------------------------------------------")


console.log(`Test:
Returns all users in the array
`)
console.log(`Expect:
Five users
`)
console.log("Result")
try {
  console.log(x.getUsers())
} catch (e: any) {
  console.log(e.message)
}
console.log("--------------------------------------------------------------------")

const y = new UserAPI()
console.log(`Test:
Returns empty array if no users in array
`)
console.log(`Expect:
[]
`)
console.log("Result")
try {
  console.log(y.getUsers())
} catch (e: any) {
  console.log(e.message)
}
console.log("--------------------------------------------------------------------")


console.log(`Test:
Removes user from the UserAPI array
`)
console.log(`Expect:
DELETE: User with id:2 is removed from following
`, x.getUsers())
console.log("Result:")
try {
  console.log("Deleted:", x.deleteUserById("2"))
  console.log("Remaining:", x.getUsers())
} catch (e: any) {
  console.log(e.message)
}
console.log("--------------------------------------------------------------------")


console.log(`Test:
Errors if user isn't found when removing from array
`)
console.log(`Expect:
DELETE: User was not found
`)
console.log("Result")
try {
  x.deleteUserById("7")
  console.log(x.getUsers())
} catch (e: any) {
  console.log(e.message)
}
console.log("--------------------------------------------------------------------")


const userTwoDuplicateName = {
  name: "Jenny",
  favoriteColor: "black",
  age: 33,
}
x.addUser(userTwoDuplicateName)
console.log(`Test:
Should find single user named Jenny
`)
console.log(`Expect:
Single user named Jenny
`)
console.log("Result")
try {
  console.log(x.searchUserByName("Jenny"))
} catch (e: any) {
  console.log(e.message)
}
console.log("--------------------------------------------------------------------")

const userOneDuplicateName = {
  name: "Daniel",
  favoriteColor: "black",
  age: 33,
}
x.addUser(userOneDuplicateName)
console.log(`Test:
Should find two users named Daniel
`)
console.log(`Expect:
Two users with Daniel as name
`)
console.log("Result")
try {
  console.log(x.searchUserByName("Daniel"))
} catch (e: any) {
  console.log(e.message)
}
console.log("--------------------------------------------------------------------")

console.log(`Test:
Should find two users named Daniel, when searching daniel (lowercase)
`)
console.log(`Expect:
Two users with Daniel as name
`)
console.log("Result")
try {
  console.log(x.searchUserByName("daniel"))
} catch (e: any) {
  console.log(e.message)
}
console.log("--------------------------------------------------------------------")


console.log(`Test:
Should find no users with name Robert
`)
console.log(`Expect:
User(s) not found
`)
console.log("Result")
try {
  console.log(x.searchUserByName("Robert"))
} catch (e: any) {
  console.log(e.message)
}
console.log("--------------------------------------------------------------------")

console.log(`Test:
Search for users based on favorite color
`)
console.log(`Expect:
Single user with favorite color purple
`)
console.log("Result")
try {
  console.log(x.searchUsersByFavoriteColor("purple"))
} catch (e: any) {
  console.log(e.message)
}
console.log("--------------------------------------------------------------------")

const userFavoriteColorPurple = {
  name: "Robert",
  favoriteColor: "purple",
  age: 56,
}
x.addUser(userFavoriteColorPurple)
console.log(`Test:
Search for users based on favorite color
`)
console.log(`Expect:
Two users with favorite color purple
`)
console.log("Result")
try {
  console.log(x.searchUsersByFavoriteColor("purple"))
} catch (e: any) {
  console.log(e.message)
}
console.log("--------------------------------------------------------------------")


console.log(`Test:
Search for users based on favorite color
`)
console.log(`Expect:
Two users with favorite color purple when searching PUrPle
`)
console.log("Result")
try {
  console.log(x.searchUsersByFavoriteColor("PUrPle"))
} catch (e: any) {
  console.log(e.message)
}
console.log("--------------------------------------------------------------------")


console.log(`Test:
Search for users based on favorite color
`)
console.log(`Expect:
Zero users with favorite color magenta - User(s) not found
`)
console.log("Result")
try {
  console.log(x.searchUsersByFavoriteColor("magenta"))
} catch (e: any) {
  console.log(e.message)
}
console.log("--------------------------------------------------------------------")
