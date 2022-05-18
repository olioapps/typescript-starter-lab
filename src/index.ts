//Define class here
const mockUsers = [
  { id: "0", name: "minoka", age: 31, favoriteColor: "green" },
  { id: "1", name: "ted", age: 23, favoriteColor: "black" },
  { id: "2", name: "ron", age: 41, favoriteColor: "blue" },
  { id: "3", name: "tim", age: 27, favoriteColor: "red" },
]

class UserAPI {
  constructor(users) {
    this.list = users || []
  }
  //random id generator
  randomId = () => {
    return Math.random().toString(24).slice(2)
  }

  addUser(user) {
    if (!user.name) {
      throw new Error("you need to at least have a name to add a user")
    }
    const newUser = { id: this.randomId(), ...user }
    this.list.push(newUser)
    return newUser
  }

  getUserById(id) {
    const targetUser = this.list.find((user) => user.id === id)
    if (!targetUser) {
      throw new Error("There are no users found with that id.")
    }
    return targetUser
  }

  updateUserById(updatedUser) {
    if (!updatedUser.id) {
      throw new Error("We can not update a user without an id")
    }
    const updatedList = this.list.map((user) => {
      if (user.id === updatedUser.id) {
        return { ...user, ...updatedUser }
      }
      return user
    })
    this.list = updatedList
    return this.getUserById(updatedUser.id)
  }

  getUsers() {
    console.log("returns an array of users")
  }

  deleteUserById(id) {
    console.log(`deletes user with id ${id}`)
  }

  searchUserByName(name) {
    console.log(`returns users which included ${name}`)
  }
}
const userObject = { name: "minoka", age: 31, favoriteColor: "green" }
const updatingUserObject = {
  id: "0",
  name: "minoka",
  age: 100,
  favoriteColor: "red",
}
const updatingUserObjectError = {
  name: "minoka",
  age: 100,
  favoriteColor: "red",
}
const updatingUserObjectErrorWithId = {
  id: "124324614614331461346",
  name: "minoka",
  age: 100,
  favoriteColor: "red",
}

const users = new UserAPI(mockUsers)
// ---TEST FOR FIRST TWO METHODS
// console.log("-------------------------------------")
// console.log("addUser:", users.addUser(userObject))
// try {
//   users.addUser({})
// } catch (err) {
//   console.log(err.message)
// }
// console.log("-------------------------------------")

// console.log("getUserById:", users.getUserById(3))
// try {
//   users.getUserById(5)
// } catch (err) {
//   console.log(err.message)
// }
console.log("-------------------------------------")
// ---TEST FOR UPDATING USER BY ID METHODS
console.log(users.updateUserById(updatingUserObject))
console.log("-------------------------------------")
try {
  users.updateUserById(updatingUserObjectError)
} catch (err) {
  console.log(err.message)
}
console.log("-------------------------------------")
try {
  users.updateUserById(updatingUserObjectErrorWithId)
} catch (err) {
  console.log(err.message)
}
console.log("-------------------------------------")
