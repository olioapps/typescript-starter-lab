interface Person {
  readonly id?: string
  readonly name: string
  readonly age?: number
  readonly favoriteColor?: string
}

export default class UserAPI {
  list: Array<Person>
  constructor(users: Array<Person>) {
    this.list = users || []
  }
  //random id generator
  randomId = (): string => {
    return Math.random().toString(24).slice(2)
  }

  addUser(user: Person): Person {
    if (!user.name) {
      throw new Error("you need to at least have a name to add a user")
    }
    const newUser = { id: this.randomId(), ...user }
    this.list.push(newUser)
    return newUser
  }

  getUserById(id: string): Person {
    const targetUser = this.list.find(user => user.id === id)
    if (!targetUser) {
      throw new Error("There are no users found with that id.")
    }
    return targetUser
  }

  updateUserById(updatedUser: Person): Person {
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

  getUsers(): Array<Person> {
    return this.list
  }

  deleteUserById(id: string): Person {
    const deletedUser = this.getUserById(id)
    const newUsersList = this.list.filter(user => user.id !== id)
    this.list = newUsersList
    return deletedUser
  }

  searchUserByName(name: string): Array<Person> {
    const filteredUserArray = this.list.filter(user => {
      if (user.name.toLowerCase().includes(name.toLowerCase())) {
        return user
      }
    })
    return filteredUserArray
  }
}
