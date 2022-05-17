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
    console.log(`looking for user with Id of ${id}`);
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
console.log(users.list);
const response = users.addUser(userObject);
console.log("response", response);
users.getUserById(3);
users.updateUserById(3);
users.getUsers();
users.deleteUserById(1);
users.searchUserByName("mino");
