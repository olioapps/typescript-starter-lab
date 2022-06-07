class User {
  name: string
  favColor: string
  age: number
    
  constructor(name: string, color: string, age: number) {
    this.name = name
    this.favColor = color
    this.age = age
  }
}

class UserAPI {
  users: Array<User>

  constructor() {
    this.users = []
  } 

  private assignId() {

  }

  addUser(user: User) {

  }

  getUserById(id: number) {

  }

  getUsers() {

  }

  deleteUserById(id: number) {

  }

  searchUserByName(name: string) {

  }

}

