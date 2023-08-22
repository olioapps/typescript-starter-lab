import { UserAPI, User } from ".";
import userRepo from "./mockdata";

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
