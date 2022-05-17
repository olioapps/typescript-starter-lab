//Define class here
console.log("hello there!");

class UserAPI {
  // these are the methods needed for basic CRUD
  addUser(user) {
    console.log(`adds a new user with the name ${user.name}`);
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

const users = new UserAPI();
users.addUser(userObject);
users.getUserById(3);
users.updateUserById(3);
users.getUsers();
users.deleteUserById(1);
users.searchUserByName("mino");
