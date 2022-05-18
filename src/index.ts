//Define class here
const mockUsers = [
  { id: 0, name: "minoka", age: 31, favoriteColor: "green" },
  { id: 1, name: "ted", age: 23, favoriteColor: "black" },
  { id: 2, name: "ron", age: 41, favoriteColor: "blue" },
  { id: 3, name: "tim", age: 27, favoriteColor: "red" },
]

class UserAPI {
  constructor(users) {
    this.list = users || []
  }
  //random id generator
  randomId = () => {
    return Math.random().toString(24).slice(2)
  }
  // these are the methods needed for basic CRUD
  addUser(user) {
    try {
      if (!user.name) {
        throw new Error("you need to at least have a name to add a user")
      }
      const newUser = { id: this.randomId(), ...user }
      this.list.push(newUser)
      return newUser
    } catch (err) {
      console.log(err.message)
    }
  }

  getUserById(id) {
    const targetUser = this.list.find((user) => user.id === id)
    try {
      if (!targetUser) {
        throw new Error("There are no users found with that id.")
      }
      return targetUser
    } catch (err) {
      console.log(err.message)
    }
  }

  updateUserById(id) {
    console.log(`updates user with Id${id}`)
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

const users = new UserAPI(mockUsers)
console.log("addUser:", users.addUser(userObject))
console.log("addUser error:", users.addUser({}))
console.log("-------------------------------------")

console.log("getUserById:", users.getUserById(3))
console.log("getUserById error:", users.getUserById(5))
console.log("-------------------------------------")

const emptyUsers = new UserAPI([])
emptyUsers.addUser(userObject)
emptyUsers.addUser(userObject)
emptyUsers.addUser(userObject)
console.log("emptyUsers", emptyUsers)
// users.updateUserById(3);
// users.getUsers();›
// users.deleteUserById(1);
// users.searchUserByName("mino");
