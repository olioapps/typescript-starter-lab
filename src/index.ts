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
    const foundUser = this.getUserById(id)

    if (!foundUser) {
      throw new Error("There are no users found with that id.")
    }

    const newUpdatedUser = { ...foundUser, ...updatedUser }
    const updatedUserList = { ...this.list, [id]: newUpdatedUser }

    this.list = updatedUserList
    return newUpdatedUser
  }

  getUsers(): ReadonlyArray<Person> | [] {
    const usersArray: ReadonlyArray<Person> = Object.values(this.list).map(
      (value: Person) => {
        return value
      }
    )

    return usersArray
  }

  deleteUserById(id: string): Person {
    if (!this.getUserById(id)) {
      throw new Error("There are no users found with that id.")
    }

    const { [id]: deletedUser, ...rest } = this.list
    this.list = rest

    return deletedUser
  }

  searchUserByName(name: string): ReadonlyArray<Person> | [] {
    const filteredUserArray: ReadonlyArray<Person> = Object.values(
      this.list
    ).filter((value: Person) =>
      value.name.toLowerCase().includes(name.toLowerCase())
    )

    return filteredUserArray
  }
}
