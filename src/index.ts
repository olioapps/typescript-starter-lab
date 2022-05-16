//Define class here
console.log("hello there!");

class UserAPI {
  constructor() {}
  // these are the methods needed for basic CRUD
  addUser(name) {
    console.log(`inside addUser ${name}`);
  }
  getUserById(id) {
    console.log(`looking for user with Id of ${id}`);
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

const users = new UserAPI();
users.addUser("minoka");
users.getUserById(3);
users.getUsers();
users.deleteUserById(1);
users.searchUserByName("mino");
