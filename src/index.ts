interface User {
  name: string
  favoriteColor: string
  age: number
  id?: number
}

class UserAPI {
  private users: Array<User>
  private currentId: number

  constructor() {
    this.users = []
    this.currentId = 1
  }

  private assignId() {
    this.currentId++
    return this.currentId - 1
  }

  addUser(user: User) {
    try {
      if (this.getUserById(Number(user.id)) === "ERROR: User not found") {
        user.id = this.assignId()
        this.users.push(user)
        return user
      } else {
        throw "ERROR: A user with that Id already exists"
      }
    } catch (error) {
      return error
    }
  }

  getUserById(id: number) {
    try {
      const user = this.users.find(x => x.id === id)
      if (user !== undefined) {
        return user
      } else {
        throw "ERROR: User not found"
      }
    }
    catch (error) {
      return error
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
  age: 33
}
console.log("Test: Should add a user object to UserAPI object x, and assign an Id of 1")
console.log("Input:", user)
x.addUser(user)
console.log(`Describe: x.getUserById(1)`)
console.log(`Expect: User {name: 'Daniel', favoriteColor: 'purple', age: 33, id: 1}`)
console.log("Result:", x.getUserById(1))
console.log("------------------------------------------")

const userTwo = {
  name: "Bob",
  favoriteColor: "green",
  age: 102
}
console.log("Test: Should add a user to UserAPI object x, and assign an Id of 2")
console.log("Input:", userTwo)
x.addUser(userTwo)
console.log(`Describe: x.getUserById(2)`)
console.log(`Expect: User {name: 'Bob', favoriteColor: 'green', age: 102, id: 2}`)
console.log("Result:", x.getUserById(2))
console.log("------------------------------------------")

const userTwoDuplicate = {
  name: "Steve",
  favoriteColor: "yellow",
  age: 17,
  id: 2
}
console.log("Test: Should attempt to add a user with an already existing Id of 2, but fail as a user with Id of 2 already exists")
console.log("Input:", userTwoDuplicate)
console.log(`Describe: x.addUser(userTwoDuplicate)`)
console.log(`Expect: "ERROR: A user with that Id already exists"`)
console.log("Result:", x.addUser(userTwoDuplicate))
console.log("------------------------------------------")


const userThree = {
  name: "Jack",
  favoriteColor: "orange",
  age: 65,
  id: 9
}

console.log("Test: Should add a user object that already has an Id of 9, but add the user with the next incremental Id")
console.log("Input:", userThree)
console.log(`Describe: x.addUser(userThree)`)
console.log(`Expect: User {name: 'Jack', favoriteColor: 'orange', age: 65, id: 3}`)
console.log("Result:", x.addUser(userThree))
console.log("------------------------------------------")

console.log("Test: Should attempt to locate a user by an Id that doesn't exist in the x object")
console.log(`Describe: x.getUserById(9)`)
console.log(`Expect: "ERROR: User not found"`)
console.log("Result:", x.getUserById(9))
console.log("------------------------------------------")
