//Define class here
console.log("hello there!");

class UserAPI {
  constructor() {}
  // these are the methods needed for basic CRUD
  addUser(name) {
    console.log(`inside addUser ${name}`);
  }
}

const users = new UserAPI();

users.addUser("minoka");
