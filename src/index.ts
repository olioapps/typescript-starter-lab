interface IUser {
  id?: number
  name: string
  favColor: string
  age: number
}

class UserAPI {
  private users: Array<IUser>
  private nextId: number

  constructor() {
    this.users = []
    this.nextId = 0
  } 

  private assignId() {
    this.nextId++
    return this.nextId
  }

  addUser(user: IUser) {
    const result = (this.users).find( ( { name, favColor, age }: IUser) => (name === user.name && favColor === user.favColor && age === user.age))
    try {
      if (result) {
        throw "User is already in the database"
      } 
    } catch (error) {
      return error
    }
    const { name, favColor, age } = user
    const newUser = this.createUser(name, favColor, age)
    this.users.push(newUser)
    return newUser
  }

  getUserById(id: number) {
    try {
      const foundUser = this.users.find( user => user.id === id) 
      if (foundUser) {
        return foundUser
      }
      throw "Error: No user found"
    }
    catch (error) {
      return (error)
    }
  }

  getUsers() {

  }

  deleteUserById(id: number) {

  }

  searchUserByName(name: string) {

  }
  
  private createUser(name: string, favColor: string, age: number): IUser {
    const id = this.assignId()
    return { id, name, favColor, age }
}
}

const x = new UserAPI()
const user = {
  id: 5,
  name: "andy",
  favColor: "blue",
  age: 247
}
console.log("AddUser:", x.addUser(user))
console.log("Get User:", x.getUserById(2))
console.log("AddUser:", x.addUser(user))
