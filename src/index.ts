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
      if (user.id) {
        throw new SyntaxError("Please resubmit without pre-exisitng ID field.")
      } else if (result) {
        throw new Error("A user with those properties already exists in the database.")
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
      throw new ReferenceError("No user found.")
    }
    catch (error) {
      return error
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
  name: "andy",
  favColor: "blue",
  age: 247
}
const userDuplicate = {
  name: "andy",
  favColor: "blue",
  age: 247
}
const user2 = {
  id: 5,
  name: "andy",
  favColor: "blue",
  age: 200
}
console.log("ADD:", x.addUser(user))
console.log("ADD:", x.addUser(userDuplicate))
console.log("ADD:", x.addUser(user2))

console.log("GET:", x.getUserById(1))
console.log("GET:", x.getUserById(2))
