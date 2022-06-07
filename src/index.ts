class UserAPI {
  users: Array<{ name: string, color: string, age: number, id?: number }>
  currentId: number

  constructor() {
    this.users = []
    this.currentId = 0
  }

  private assignId() {
    this.currentId++;
    return this.currentId - 1;
  }

  addUser(user: { name: string, color: string, age: number, id?: number }) {
    user.id = this.assignId();
    this.users.push(user);
  }

  getUserById(id: number) {
    const user = this.users.find(x => x.id === id);
    if (user !== undefined) {
      return user;
    } else {
      return "User not found";
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
  color: "purple",
  age: 33
};
x.addUser(user);
console.log(`Describe(id: 0) - Expect(User {'Daniel', 'purple', 33, 0})`);
console.log("Result: ", x.getUserById(0));

const userTwo = {
  name: "Bob",
  color: "green",
  age: 102
};
x.addUser(userTwo);
console.log(`Describe(id: 1) - Expect(User {'Bob', 'green', 102, 1})`);
console.log("Result: ", x.getUserById(1));

console.log(`Describe(id: 2) - Expect("User not found")`);
console.log("Result: ", x.getUserById(2));
