import { User, ID, Color, UserApi } from "./index";

describe("UserApi tests", () => {
  console.log("Starting UserApi test")

  let user1: User
  let user2: User
  let user3: User
  let api = new UserApi

  it("Can initialize a new UserApi", () => {
    const testApi = new UserApi();
    expect(testApi).toBeInstanceOf(UserApi);
  })

  it("Can create a new user", () => {
    user1 = api.createUser({ name: "Ian", age: 31, favoriteColor: "red" })
    expect(user1).toEqual({
      id: 1,
      name: "Ian",
      age: 31,
      favoriteColor: "red"
    })
  })

  it("Can get all users", () => {

  })

  it("Can get a single user", () => {

  })

  it("Can update a user", () => {

  })

  it("Can delete a user", () => {

  })

  it("Throws when fetching a user without supplying an ID", () => {

  })

  it("Throws when creating a user with an already existing ID", () => {

  })

  it("Throws when deleting a user without supplying an ID", () => {

  })

  it("Throws when updating a user without suppling an ID", () => {

  })

  it("Throws when attempting to update a user that does not exist", () => {

  })

  it("Throws when deleting a user that does not exist", () => {

  })
})
