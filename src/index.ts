export interface User {
  readonly id?: number,
  readonly name: string,
  readonly age: number,
  readonly favoriteColor: Color
}

export type ID = number;
export type Color = "red" | "green" | "blue"

export class UserApi {
  private users = new Map<ID, User>()
  private static count = 0

  private static generateId(): ID {
    UserApi.count++
    return UserApi.count
  }
  
  getUser = (id: ID): User | null => {
    return this.users.get(id) || null
  }

  getUsers = (): User[]  => {
    // to replace with iterator
    const result: User[] = []
    for (let [id, user] of this.users) {
      result.push(user)
    }
    return result
  }

  createUser = (newUser: User): User => {
    if (newUser.id && this.users.get(newUser.id)) {
      throw new Error("User already exists.")
    }
    const id = UserApi.generateId()
    const userObject = { id, ...newUser}
    this.users.set(id, userObject)
    return userObject
  }

  deleteUser = (id: ID): void => {
    if (!this.users.delete(id)) { throw new Error("User not found.")}
  }

  updateUser = (newData: User): User => {
    if (!newData.id) { throw new Error("Missing User ID.") }
    const existingUser = this.users.get(newData.id)
    if (!existingUser) { throw new Error("User not found.") }

    //as PATCH:
    // const updatedUser = { ...existingUser, ...newData }

    //as PUT:
    this.users.set(newData.id, newData)
    return newData
  }
}
