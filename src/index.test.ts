import { UserAPI } from ".";
import { userRepo, newUser } from "./mockdata";

describe("UserAPI constructor", () => {
  it("should instantiate an instance of UserAPI without user repository", () => {
    const newUserApi = new UserAPI();
    const expected = 0;
    const actual = newUserApi.getAllUsers().length;
    expect(actual).toEqual(expected);
  });

  it("should instantiate an instance of UserApi with a user repository", () => {
    const newUserApi = new UserAPI(userRepo);
    const expected = Object.keys(userRepo).length;
    const actual = newUserApi.getAllUsers().length;
    expect(actual).toEqual(expected);
  });
});

describe("UserAPI.getAllUsers", () => {
  it("should return an array of all users in the repository", () => {
    const newUserApi = new UserAPI(userRepo);
    const expected = Object.values(userRepo);
    const actual = newUserApi.getAllUsers();
    expect(actual).toEqual(expected);
  });
});

describe("UserAPI.addUser", () => {
  it("should add uninitialized user to the UserAPI repo", () => {
    const newUserApi = new UserAPI();
    newUserApi.addUser(newUser);
    const expected = 1;
    const actual = newUserApi.getAllUsers().length;
    expect(actual).toEqual(expected);
  });
  it("should generate an id for a new user when added to the UserAPI repo", () => {
    const newUserApi = new UserAPI();
    newUserApi.addUser(newUser);
    expect(newUserApi.getAllUsers()[0].id).toBeTruthy();
  });
  it("should append new user to existing repo", () => {
    const newUserApi = new UserAPI(userRepo);
    newUserApi.addUser(newUser);
    const expected = 4;
    const actual = newUserApi.getAllUsers().length;
    expect(actual).toEqual(expected);
  });
  it("should return the new user", () => {
    const newUserApi = new UserAPI();
    newUserApi.addUser(newUser);
    const expected = newUser.name;
    const actual = newUserApi.addUser(newUser).name;
    expect(actual).toEqual(expected);
  });
});

describe("UserAPI.getUserById", () => {
  it("should return a single user object when matching id string is passed as an argument", () => {
    const newUserApi = new UserAPI(userRepo);
    const expected = newUserApi.getAllUsers()[0];
    const actual = newUserApi.getUserById("342");
    expect(actual).toEqual(expected);
  });
  it("should throw an error if no id matches a user", () => {
    const newUserApi = new UserAPI(userRepo);
    const error = () => newUserApi.getUserById("");
    expect(error).toThrow("User not found");
  });
});

describe("UserAPI.deleteUserById", () => {
  it("should remove a user from a larger repo when given an id string", () => {
    const newUserApi = new UserAPI(userRepo);
    const expected = "721";
    const actual = newUserApi.deleteUserById("721").id;
    expect(actual).toEqual(expected);
  });
  it("should return the deleted user", () => {
    const newUserApi = new UserAPI(userRepo);
    const expected = newUserApi.getUserById("342");
    const actual = newUserApi.deleteUserById("342");
    expect(actual).toEqual(expected);
  });
  it("should throw an error if invalid user id was passed", () => {
    const newUserApi = new UserAPI(userRepo);
    const error = () => newUserApi.deleteUserById("");
    expect(error).toThrow("User not found");
  });
});

describe("UserAPI.updateUser", () => {
  it("should update a user at a given id with the user object passed", () => {
    const newUserApi = new UserAPI(userRepo);
    const updateUserInfo = {
      name: "Sandle",
      age: 15,
      favColor: "grey",
    };
    const expected = "Sandle";

    const updatedUser = newUserApi.updateUserById("342", updateUserInfo);
    const actual = updatedUser.name;

    expect(actual).toEqual(expected);
  });
  it("should throw an error if invalid user id was passed", () => {
    const newUserApi = new UserAPI(userRepo);
    const error = () => newUserApi.updateUserById("", newUser);

    expect(error).toThrow("User not found");
  });
});
