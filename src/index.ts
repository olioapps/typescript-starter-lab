//@ts-nocheck
export default class UserAPI {
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
    const targetUser = this.list.find(user => user.id === id)
    if (!targetUser) {
      throw new Error("There are no users found with that id.")
    }
    return targetUser
  }

  updateUserById(updatedUser) {
    if (!updatedUser.id) {
      throw new Error("We can not update a user without an id")
    }
    const updatedList = this.list.map(user => {
      if (user.id === updatedUser.id) {
        return { ...user, ...updatedUser }
      }
      return user
    })
    this.list = updatedList
    return this.getUserById(updatedUser.id)
  }

  getUsers() {
    return this.list
  }

  deleteUserById(id) {
    const deletedUser = this.getUserById(id)
    const newUsersList = this.list.filter(user => user.id !== id)
    this.list = newUsersList
    return deletedUser
  }

  searchUserByName(name) {
    const filteredUserArray = this.list.filter(user => {
      if (user.name.toLowerCase().includes(name.toLowerCase())) {
        return user
      }
    })
    return filteredUserArray
  }
}

// const users = new UserAPI(mockUsers)
// //---TEST FOR FIRST TWO METHODS
// console.log("-------------------------------------")
// console.log("addUser:", users.addUser(userObject))
// try {
//   users.addUser({})
// } catch (err) {
//   console.log(err.message)
// }
// console.log("-------------------------------------")
// console.log("getUserById:", users.getUserById("3"))
// try {
//   users.getUserById("5")
// } catch (err) {
//   console.log(err.message)
// }
// // ---TEST FOR GET USERS
// console.log("-------------------------------------")
// const emptyUsers = new UserAPI()
// console.log("-------------------------------------")
// console.log('list: 'users.getUsers())
// console.log('empty list: ', emptyUsers.getUsers())
// console.log("-------------------------------------")

// console.log("-------------------------------------")
// // ---TEST FOR UPDATING USER BY ID METHODS
// console.log(users.updateUserById(updatingUserObject))
// console.log("-------------------------------------")
// try {
//   users.updateUserById(updatingUserObjectError)
// } catch (err) {
//   console.log(err.message)
// }
// console.log("-------------------------------------")
// try {
//   users.updateUserById(updatingUserObjectErrorWithId)
// } catch (err) {
//   console.log(err.message)
// }
// console.log("-------------------------------------")

// // ---TEST FOR DELETE USER BY ID
// console.log("-------------------------------------")
// // This should delete tim from the mock users list.
// console.log(users)
// console.log(users.deleteUserById("3"))
// console.log(users)
// // This will throw an error because tim is already deleted.
// console.log("-------------------------------------")
// try {
//   users.deleteUserById("3")
// } catch (err) {
//   console.log(err.message)
// }
// console.log("-------------------------------------")
// // TEST FOR SEARCHING USER BY NAME
// console.log("-------------------------------------")
// console.log('should return 2 users: ', users.searchUserByName('Mino'))

// console.log("-------------------------------------")
// console.log('should return 1 user: ', users.searchUserByName('tEd'))

// console.log("-------------------------------------")
// console.log('should return 3 users: ', users.searchUserByName('o'))

// console.log("-------------------------------------")
// console.log('should return empty array: ', users.searchUserByName('benjamin'))

// console.log("-------------------------------------")
