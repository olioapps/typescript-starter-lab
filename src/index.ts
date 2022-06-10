export interface IUser {
  id?: string
  name: string
  favColor: string
  age: number
}

export class UserAPI {
  private _users: Record<string, IUser>

  constructor(seedData: Record<string, IUser> = {}) {
    this._users = {...seedData}
  } 

  addUser(userToAdd: IUser): IUser{
    if (userToAdd.id) {
      throw new SyntaxError("Please resubmit without pre-exisitng ID field.")
    } 
    let user = {...userToAdd}
    const result = (Object.values(this._users)).filter( existingUser => (
      existingUser.name.toLowerCase() === user.name.toLowerCase() && 
      existingUser.favColor.toLowerCase() === user.favColor.toLowerCase() && 
      existingUser.age === user.age
    ))
    
    if (result.length) {
      throw new Error("A user with those properties already exists in the database.")
    } 
    const id = Date.now().toString() + Math.floor(Math.random()*100)
    user.id = id
    let newUsersState: any = {...this._users}
    newUsersState[id] = user
    this._users = {...newUsersState}
    return user
  }

  getUserById(id: string): IUser{
    const foundUser = Object.values(this._users).find( user => user.id === id) 
    if (foundUser) {
      return foundUser
    }
    throw new ReferenceError(`No user found with id ${id}.`)
  }

  getUsers(): Array<IUser>{
    if (this._users === null || this._users === undefined) {
      throw new Error(`User Dataset not found`)
    }
    return Object.values(this._users)
  }

  deleteUserById(id: string): IUser {
    if (this._users[id]) {
      const newUserState = {...this._users}
      const user = newUserState[id]
      delete newUserState[id]
      this._users = {...newUserState}
      return user
    } 
    throw new ReferenceError(`No user found with id ${id}.`)
  }

  searchUserByName(name: string): Array<IUser>{
    const users = Object.values(this._users).filter( user => user.name.toLowerCase() === name.toLowerCase())
    
    if (users.length) {
      return users
    } 
    throw new ReferenceError(`No user found with name ${name}`)
  }

  searchUsersByFavoriteColor(color: string): Array<IUser>{
    const users = Object.values(this._users).filter( user => user.favColor.toLowerCase() === color.toLowerCase())
    if (users.length) {
      return users
    } 
    throw new ReferenceError(`No users favorite color is ${color}`)
  }
}
