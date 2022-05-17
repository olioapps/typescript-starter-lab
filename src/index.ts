//Define class here
const mockUsers = [
  { id: 0, name: "minoka", age: 31, favoriteColor: "green" },
  { id: 1, name: "ted", age: 23, favoriteColor: "black" },
  { id: 2, name: "ron", age: 41, favoriteColor: "blue" },
  { id: 3, name: "tim", age: 27, favoriteColor: "red" },
];

class UserAPI {
  constructor(users) {
    this.list = users;
  }
  // these are the methods needed for basic CRUD
  addUser(user) {
    const newUser = { id: this.list.length, ...user };
    this.list.push(newUser);
    return newUser;
  }
  getUserById(id) {
    const targetUser = this.list.filter((user) => user.id === id);
    if (!targetUser[0]) {
      return "there is no one found with that id";
    } else {
      return targetUser[0];
    }
  }
  updateUserById(id) {
    console.log(`updates user with Id${id}`);
  }
  getUsers() {
    console.log("returns an array of users");
  }
  deleteUserById(id) {
    console.log(`deletes user with id ${id}`);
  }
  searchUserByName(name) {
    console.log(`returns users which included ${name}`);
  }
}
const userObject = { name: "minoka", age: 31, favoriteColor: "green" };

const users = new UserAPI(mockUsers);
console.log("addUser:", users.addUser(userObject));
console.log("getUserById:", users.getUserById(3));
console.log("getUserById error:", users.getUserById(5));
users.updateUserById(3);
users.getUsers();
users.deleteUserById(1);
users.searchUserByName("mino");
