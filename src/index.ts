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
    return [...this.users.values()]
  }

  createUser = (newUser: User): User => {
    if (newUser.id && this.users.get(newUser.id)) {
      throw new ApiError("User already exists.", 409)
    }
    const id = UserApi.generateId()
    const userObject = { id, ...newUser}
    this.users.set(id, userObject)
    return userObject
  }

  deleteUser = (id: ID): void => {
    if (!this.users.delete(id)) { throw new ApiError("User not found.", 404)}
  }

  updateUser = (newData: User): User => {
    if (!newData.id) { throw new ApiError("Missing User ID.", 400) }
    const existingUser = this.users.get(newData.id)
    if (!existingUser) { throw new ApiError("User not found.", 404) }

    //as PATCH:
    // const updatedUser = { ...existingUser, ...newData }

    //as PUT:
    this.users.set(newData.id, newData)
    return newData
  }
}

export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message)
    this.status = status

    if(Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError)
    }
  }
}

export class ArrayUserApi {
  private users: ReadonlyArray<User> = []
  private static count = 0

  private static generateId(): ID {
    ArrayUserApi.count++
    return ArrayUserApi.count
  }
  
  getUser = (id: ID): User | null => {
    return this.users.reduce((acc, curr) => {
      if (curr.id === id ) acc = curr
      return acc
    }, null as User | null)
  }

  getUsers = (): readonly User[]  => {
    return this.users
  }

  createUser = (newUser: User): User => {
    if (newUser.id && this.getUser(newUser.id)) {
      throw new ApiError("User already exists.", 409)
    }
    const id = ArrayUserApi.generateId()
    const userObject = { id, ...newUser}
    this.users = [ ...this.users, userObject ]
    return userObject
  }

  deleteUser = (id: ID): void => {
    if (!this.getUser(id)) { throw new ApiError("User not found.", 404)}
    this.users = this.users.filter(user => user.id != id)
  }

  updateUser = (newData: User): User => {
    if (!newData.id) { throw new ApiError("Missing User ID.", 400) }
    const existingUser = this.getUser(newData.id)
    if (!existingUser) { throw new ApiError("User not found.", 404) }

    //as PATCH:
    // const updatedUser = { ...existingUser, ...newData }

    //as PUT:
    // this.users.set(newData.id, newData)
    this.users = this.users.map(user => {
      if (user.id === newData.id) return newData
      else return user
    })
    return newData
  }
}

export const blah = 'blah'
