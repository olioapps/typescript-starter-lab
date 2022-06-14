export interface IUser {
  readonly id?: string
  readonly name: string
  readonly favColor: string
  readonly age: number
}

export type IUserRecord = Record<string, IUser>

export class UserAPI {
  private _users: Readonly<IUserRecord>

  constructor(seedData: IUserRecord = {}) {
    this._users = {...seedData}
  } 

  private _assignId(): string {
    const id: Readonly<string> = Date.now().toString() + Math.floor(Math.random()*100)
    return id
  }
  
  addUser(user: IUser): IUser {
    if (user.id) {
      throw new SyntaxError("Please resubmit without pre-exisitng ID field.")
    } 
    const result = (Object.values(this._users)).some( existingUser => (
      existingUser.name.toLowerCase() === user.name.toLowerCase() && 
      existingUser.favColor.toLowerCase() === user.favColor.toLowerCase() && 
      existingUser.age === user.age
    ))
    
    if (result) {
      throw new Error("A user with those properties already exists in the database.")
    } 

    const newUser = {...user, id: this._assignId()}
    this._users = {...this._users, [newUser.id]: newUser}
    return newUser
  }

  getUserById(id: string): IUser {
    if (this._users[id]) {
      return this._users[id]
    }
    throw new ReferenceError(`No user found with id ${id}.`)
  }

  getUsers(): Array<IUser> {
    if (this._users === null || this._users === undefined) {
      throw new Error(`User Dataset not found`)
    }
    return Object.values(this._users)
  }

  deleteUserById(id: string): IUser {
    if (this._users[id]) {
      const { [id]: deletedUser, ...rest } = this._users
      this._users = {...rest}
      return deletedUser
    } 
    throw new ReferenceError(`No user found with id ${id}.`)
  }

  searchUserByName(name: string): ReadonlyArray<IUser> {
    const users = Object.values(this._users).filter( user => user.name.toLowerCase() === name.toLowerCase())
    
    if (users.length) {
      return users
    } 
    throw new ReferenceError(`No user found with name ${name}`)
  }

  searchUsersByFavoriteColor(color: string): ReadonlyArray<IUser> {
    const users = Object.values(this._users).filter( user => user.favColor.toLowerCase() === color.toLowerCase())
    if (users.length) {
      return users
    } 
    throw new ReferenceError(`No users favorite color is ${color}`)

  }
}
