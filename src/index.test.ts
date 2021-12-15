import { User, ApiError, UserApi, ArrayUserApi, Color,  } from "./index";

type apiClass = UserApi | ArrayUserApi
type classNameStrs = "api1" | "api2"
const makeClass = (className: classNameStrs): apiClass => {
  return className === "api1" ? new UserApi : new ArrayUserApi
}

const testMe = (classStr: classNameStrs) => {
  describe("UserApi tests", () => {

    let user1: User
    let user2: User
    let user3: User
    let api = makeClass(classStr)

    it("Can initialize a new UserApi", () => {
      const testApi = makeClass(classStr)
      expect(testApi).toBeDefined();
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

    it("returns null if a user cannot be found by ID", () => {
      const result = api.getUser(99)
      expect(result).toBeNull()
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
      const badCreate = {id: 2, name: "Bob", age: 56, favoriteColor: "red" as Color}
      expect(() => api.createUser(badCreate)).toThrow()
      try {
        api.createUser(badCreate)
      } catch (error: any) {
        expect(error).toBeInstanceOf(ApiError)
        expect(error.message).toEqual("User already exists.")
        expect(error.status).toEqual(409)
      }
    })

    it("Throws when updating a user without supplying an ID", () => {
      const badUpdate = { name: "Evan", age: 20 }
      //@ts-ignore
      expect(() => api.updateUser(badUpdate)).toThrow()
      try{
        // @ts-ignore
        api.updateUser(badUpdate)
      } catch (error: any) {
        expect(error).toBeInstanceOf(ApiError)
        expect(error.message).toEqual("Missing User ID.")
        expect(error.status).toEqual(400)
      }
    })

    it("Throws when attempting to update a user that does not exist", () => {
      const badUser = { id: 7, name: "Erica" }
      //@ts-ignore
      expect(() => api.updateUser(badUser)).toThrow()
      try{
        // @ts-ignore
        api.updateUser(badUser)
      } catch (error: any) {
        expect(error).toBeInstanceOf(ApiError)
        expect(error.message).toEqual("User not found.")
        expect(error.status).toEqual(404)
      }
    })

    it("Throws when deleting a user that does not exist", () => {
      expect(() => api.deleteUser(20)).toThrow()
      try{
      // @ts-ignore
      api.deleteUser(20)
      } catch (error: any) {
        expect(error).toBeInstanceOf(ApiError)
        expect(error.message).toEqual("User not found.")
        expect(error.status).toEqual(404)
      }
    })

    it("Can construct a new ApiError", () => {
      const error = new ApiError("Test", 404)
      expect(error).toBeInstanceOf(ApiError)
      expect(error.message).toEqual("Test")
      expect(error.status).toEqual(404)
      expect(error.stack).toBeDefined();
    })
  })
}

testMe("api1")
testMe("api2")