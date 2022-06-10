export interface IUser {
  id?: string
  name: string
  favColor: string
  age: number
}

export class UserAPI {
  private _users: object

  constructor(seedData: object = {}) {
    this._users = {...seedData}
  } 

  addUser(userToAdd: IUser) {
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

  getUserById(id: string) {
    const foundUser = Object.values(this._users).find( user => user.id === id) 
    if (foundUser) {
      return foundUser
    }
    throw new ReferenceError(`No user found with id ${id}.`)
  }

  getUsers() {
    if (this._users === null || this._users === undefined) {
      throw new Error(`User Dataset not found`)
    }
    return Object.values(this._users)
  }

  deleteUserById(id: string) {
    const user = Object.values(this._users).filter( user => user.id === id)
    
    if (user.length) {
      const newUserState = Object.values(this._users).filter( user => user.id != id)
      this._users = [...newUserState]
      return user
    } else{
      throw new ReferenceError(`No user found with id ${id}.`)
    }  
  }

  searchUserByName(name: string) {
    const users = Object.values(this._users).filter( user => user.name.toLowerCase() === name.toLowerCase())
    
    if (users.length) {
      return users
    } 
    throw new ReferenceError(`No user found with name ${name}`)
  }

  searchUsersByFavoriteColor(color: string) {
    const users = Object.values(this._users).filter( user => user.favColor.toLowerCase() === color.toLowerCase())
    if (users.length) {
      return users
    } 
    throw new ReferenceError(`No users favorite color is ${color}`)
  }
}
