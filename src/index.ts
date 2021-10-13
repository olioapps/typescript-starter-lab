
// user object has these fields
// id (optional)
// name
// age
// color

// -create a class called UserAPI
// it has a class property called users, which is just a map {}
// add the following functions to the class, using es6 syntax (arrow functions)
// 1. getUser by id (eg. getUser = (id)=  > { return ...})
// 2. getUsers (returns all users in array)
// 3. createUser has argument of user object {}. Make sure to assign an id property to the user object
// 4. deleteUser by id
// 5. updateUser has argument of user object {}

// each of the functions will manipulate / access the users class property
// use immutability via the spread operator:  { ...user, id: "myID" }
// show that these operations work by creating an instance of your class, and calling the methods
// and console logging the output

// const myApi = new UserApI()
// myApi.xxx()

class UserAPI {
  constructor() {
    this.users = {};
  }

  getUsers = () => Object.values(this.users);

  getUserById = (id) => {
    return this.users[id];
  };

  createUser = (user) => {
    const users = this.users;
    const newId = () => {
      if (Object.keys(users).length === 0) {
        return 1;
      } else {
        let max = Math.max(...Object.keys(users));
        return max + 1;
      }
    };
    const userWithId = { ...user, id: newId() };
    this.users = { ...this.users, [newId()]: userWithId };
    return userWithId;
  };

  updateUser = (user) => {
    this.users = { ...this.users, [user.id]: user };
    return user;
    //use spread operator to update by key
  };

  deleteUser = (id) => {
    const { [id]: user, ...updatedUsers } = this.users;
    this.users = updatedUsers;
  };
}

const myApi = new UserAPI();

const userOne = {
  id: null,
  name: "hank",
  age: 7,
  color: "orange",
};

const userTwo = {
  id: null,
  name: "rob",
  age: 5,
  color: "green",
};

const userThree = {
  id: null,
  name: "elbert",
  age: 8,
  color: "blue",
};

const userThreeUpdate = {
  id: 3,
  name: "elbert",
  age: 9,
  color: "blue",
};

console.log(myApi.createUser(userOne));
console.log(myApi.createUser(userTwo));
console.log(myApi.createUser(userThree));
console.log(myApi.getUsers());
console.log(myApi.getUserById(1));
console.log(myApi.updateUser(userThreeUpdate));
console.log(myApi.getUsers());
console.log(myApi.deleteUser(1));
console.log(myApi.getUsers());



