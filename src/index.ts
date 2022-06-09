export interface IUser {
  id?: string
  name: string
  favColor: string
  age: number
}

export class UserAPI {
  private _users: Array<IUser>

  constructor(seedData: Array<IUser> = []) {
    this._users = [...seedData]
  } 

  addUser(user: IUser) {
    if (user.id) {
      throw new SyntaxError("Please resubmit without pre-exisitng ID field.")
    } 
    
    user.id = Date.now().toString()
    const result = (this._users).find( ( { name, favColor, age }: IUser) => (name === user.name && favColor === user.favColor && age === user.age))
    
    if (result) {
      throw new Error("A user with those properties already exists in the database.")
    } 
    
    this._users = [...this._users, user]
    return user
  }

  getUserById(id: string) {
    const foundUser = this._users.find( user => user.id === id) 
    
    if (foundUser) {
      return foundUser
    }
    throw new ReferenceError(`No user found with id ${id}.`)
  }

  getUsers() {
    if (this._users === null || this._users === undefined) {
      throw new Error(`User Dataset not found`)
    }
    return this._users
  }

  deleteUserById(id: string) {
    const user = this._users.filter( user => user.id === id)
    
    if (user.length) {
      const newUserState = this._users.filter( user => user.id != id)
      this._users = [...newUserState]
      return user
    } else{
      throw new ReferenceError(`No user found with id ${id}.`)
    }  
  }

  searchUserByName(name: string) {
    const users = this._users.filter( user => user.name.toLowerCase() === name.toLowerCase())
    
    if (users.length) {
      return users
    } 
    throw new ReferenceError(`No user found with name ${name}`)
  }

  searchUsersByFavoriteColor(color: string) {
    const users = this._users.filter( user => user.favColor.toLowerCase() === color.toLowerCase())
    if (users.length) {
      return users
    } 
    throw new ReferenceError(`No users favorite color is ${color}`)
  }
  
}