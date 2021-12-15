import { User, ApiError, UserApi } from "./index";

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
    user2 = api.createUser({ name: "Evan", age: 29, favoriteColor: "green" })
    user3 = api.createUser({ name: "Sarah", age: 29, favoriteColor: "blue" })

    const users = api.getUsers();
    expect(users).toEqual([
      { id: 1, name: "Ian", age: 31, favoriteColor: "red" },
      { id: 2, name: "Evan", age: 29, favoriteColor: "green"} ,
      { id: 3, name: "Sarah", age: 29, favoriteColor: "blue" }
    ])
  })

  it("Can get a single user", () => {
    const result = api.getUser(1);
    expect(result).toEqual({ ...user1, id: 1})
  })

  it("Can update a user", () => {
    api.updateUser({ id: 1, name: "Ian", age: 31, favoriteColor: "blue"})

    expect(api.getUser(1)).toEqual({
      id: 1,
      name: "Ian",
      age: 31,
      favoriteColor: "blue"
    })
  })

  it("Can delete a user", () => {
    api.deleteUser(1)
    expect(api.getUsers().length).toEqual(2)
  })

  it("Throws when creating a user with an already existing ID", () => {
    try {
      // @ts-ignore
      api.createUser({id: 1, name: "Bob", age: 56, favoriteColor: "red"})
    } catch (error: any) {
      expect(error.message).toEqual("User already exists.")
    }
  })

  it("Throws when updating a user without supplying an ID", () => {
    try{
      // @ts-ignore
      api.updateUser({ name: "Evan", age: 20 })
    } catch (error: any) {
      expect(error.message).toEqual("Missing User ID.")
    }
  })

  it("Throws when attempting to update a user that does not exist", () => {
    try{
      // @ts-ignore
      api.updateUser({ id: 7, name: "Erica" })
    } catch (error: any) {
      expect(error.message).toEqual("User not found.")
    }
  })

  it("Throws when deleting a user that does not exist", () => {
    try{

    // @ts-ignore
    api.deleteUser(20)
    } catch (error: any) {
      expect(error.message).toEqual("User not found.")
    }
  })

  it("Can construct a new ApiError", () => {
    const error = new ApiError("Test", 404)
    expect(error).toBeInstanceOf(ApiError)
    expect(error.message).toEqual("Test")
    expect(error.status).toEqual(404)
    console.log(JSON.stringify(error))
    expect(error.stack).toBeDefined();
  })
})
