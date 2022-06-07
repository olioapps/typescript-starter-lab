interface User {
  name: string
  favoriteColor: string
  age: number
  id?: number
}

class UserAPI {
  users: Array<User>
  currentId: number

  constructor() {
    this.users = []
    this.currentId = 0
  }

  private assignId() {
    this.currentId++
    return this.currentId - 1
  }

  addUser(user: User) {
    user.id = this.assignId()
    this.users.push(user)
  }

  getUserById(id: number) {
    const user = this.users.find(x => x.id === id)
    if (user !== undefined) {
      return user
    } else {
      return "User not found"
    }
  }

  getUsers() {

  }

  deleteUserById(id: number) {

  }

  searchUserByName(name: string) {

  }
}

const x = new UserAPI();

const user = {
  name: "Daniel",
  favoriteColor: "purple",
  age: 33
};
x.addUser(user)
console.log(`Describe(getUserById(0)) - Expect(User {'Daniel', 'purple', 33, 0})`)
console.log("Result: ", x.getUserById(0))

const userTwo = {
  name: "Bob",
  favoriteColor: "green",
  age: 102
};
x.addUser(userTwo);
console.log(`Describe(getUserById(1)) - Expect(User {'Bob', 'green', 102, 1})`)
console.log("Result: ", x.getUserById(1))

console.log(`Describe(getUserById(2)) - Expect("User not found")`)
console.log("Result: ", x.getUserById(2))
