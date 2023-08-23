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
});

describe("UserAPI.getUserById", () => {
  it("should return a single user object when matching id string is passed as an argument", () => {
    const newUserApi = new UserAPI(userRepo);
    const expected = newUserApi.getAllUsers()[0];
    const actual = newUserApi.getUserById("342");
    expect(actual).toEqual(expected);
  });
  it("should return falsy if no id matches a user", () => {
    const newUserApi = new UserAPI();
    newUserApi.addUser(newUser);
    const actual = newUserApi.getUserById("2");
    expect(actual).toEqual({});
  });
});

describe("UserAPI.deleteUserById", () => {
  it("should remove a user from a larger repo when given an id string", () => {
    const newUserApi = new UserAPI(userRepo);
    const expected = newUserApi.getAllUsers().length - 1;
    newUserApi.deleteUserAtId("721");
    const actual = newUserApi.getAllUsers().length;
    expect(actual).toEqual(expected);
  });
  it("should return the deleted user", () => {
    const newUserApi = new UserAPI(userRepo);
    const expected = newUserApi.getUserById("342");
    const actual = newUserApi.deleteUserAtId("342");
    expect(actual).toEqual(expected);
  });
});
