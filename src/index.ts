import { Person, UserFormMeta, Users } from "./interfaces"

export default class UserAPI {
  list: Users

  constructor(users: Users) {
    this.list = users || {}
  }

  randomId = (): string => {
    return Math.random().toString(24).slice(2)
  }

  addUser(user: UserFormMeta): Person {
    if (!user.name) {
      throw new Error("you need to at least have a name to add a user")
    }

    const id = this.randomId()
    const newUser = { id, ...user }
    this.list = { ...this.list, [id]: newUser }
    return newUser
  }

  getUserById(id: string): Person {
    const targetUser = this.list[id]

    if (!targetUser) {
      throw new Error("There are no users found with that id.")
    }

    return targetUser
  }

  updateUserById(id: string, updatedUser: Partial<UserFormMeta>): Person {
    if (!id) {
      throw new Error("We can not update a user without an id")
    }

    this.getUserById(id)
    const newUpdatedUser = { ...this.list[id], ...updatedUser }

    for (const [key, value] of Object.entries(this.list)) {
      if (key === id) {
        this.list[id] = newUpdatedUser
      }
    }

    return newUpdatedUser
  }

  getUsers(): ReadonlyArray<Person> | [] {
    let usersArray: Array<Person> = []

    const userArray = []

    for (const [key, value] of Object.entries(this.list)) {
      userArray.push(value)
    }

    return userArray
  }

  deleteUserById(id: string): Person {
    const deletedUser = this.getUserById(id)

    delete this.list[id]

    this.list = { ...this.list }
    return deletedUser
  }

  searchUserByName(name: string): ReadonlyArray<Person> | [] {
    const filteredUserArray = []

    for (const [key, value] of Object.entries(this.list)) {
      if (this.list[key].name.toLowerCase().includes(name.toLowerCase())) {
        filteredUserArray.push(value)
      }
    }

    return filteredUserArray
  }
}
