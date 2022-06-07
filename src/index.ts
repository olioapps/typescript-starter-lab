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
    const {name, favColor, age} = user
    const newUser = this.createUser(name, favColor, age)
    this.users.push(newUser)
    return newUser
  }

  getUserById(id: number) {
    const foundUser = this.users.find( user => user.id === id) 
    if (foundUser) {
      return foundUser
    }
    return "No user found"
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
  name: "andy",
  favColor: "blue",
  age: 247
}
console.log(x.addUser(user))
console.log(x.getUserById(1))
