import { UserAPI } from "./index"
describe('UserAPI() objects and method ', () => {

  describe('creating a new UserAPI() object', () => {
    it("should confirm users is a UserAPI object", () => {
      const users = new UserAPI()
      expect(users).toBeInstanceOf(UserAPI)
    })

    it("should return empty object", () => {
      const users = new UserAPI()
      expect(users.getUsers())
        .toEqual({})
    })

    it("should instantiate object with two values", () => {
      const users = new UserAPI({
        ["1"]: { name: 'Daniel', favoriteColor: 'purple', age: 33 },
        ["2"]: { name: 'Jenny', favoriteColor: 'yellow', age: 129 }
      })
      expect(users.getUsers())
        .toEqual({
          ["1"]: { name: 'Daniel', favoriteColor: 'purple', age: 33 },
          ["2"]: { name: 'Jenny', favoriteColor: 'yellow', age: 129 }
        })
    })
  })

  describe('UserAPI.getUsers()', () => {
    it("should return empty object", () => {
      const users = new UserAPI()
      expect(users.getUsers())
        .toEqual({})
    })

    it("should return array of two users", () => {
      const users = new UserAPI({
        ["1"]: { name: 'Daniel', favoriteColor: 'purple', age: 33 },
        ["2"]: { name: 'Jenny', favoriteColor: 'yellow', age: 129 }
      })
      expect(users.getUsers())
        .toEqual({
          ["1"]: { name: 'Daniel', favoriteColor: 'purple', age: 33 },
          ["2"]: { name: 'Jenny', favoriteColor: 'yellow', age: 129 }
        })
    })
  })

  describe('UserAPI.addUser()', () => {
    it("should return the new user", () => {
      const users = new UserAPI()
      expect(users.addUser({ name: 'Daniel', favoriteColor: 'purple', age: 33 }))
        .toEqual({ name: 'Daniel', favoriteColor: 'purple', age: 33 })
    })

    it("should fail to add user if Id is provided", () => {
      const users = new UserAPI()
      const userWithId = { name: 'Daniel', favoriteColor: 'green', age: 33, id: "2" }
      expect(() => { users.addUser(userWithId) })
        .toThrow("Id incorrectly provided by input user")
    })

    it("should fail to add user if user with same props exists", () => {
      const users = new UserAPI({ ["1"]: { name: 'Daniel', favoriteColor: 'purple', age: 33 } })
      const userDuplicate = { name: 'Daniel', favoriteColor: 'purple', age: 33 }
      expect(() => { users.addUser(userDuplicate) })
        .toThrow("User with these properties already exists")
    })

  })

  describe('UserAPI.getUserById()', () => {
    it("should return a user with the Id of 1", () => {
      const users = new UserAPI({ ["1"]: { name: 'Daniel', favoriteColor: 'purple', age: 33 } })
      expect(users.getUserById("1"))
        .toEqual({ name: 'Daniel', favoriteColor: 'purple', age: 33 })
      expect(users.getUsers())
        .toEqual({ ["1"]: { name: 'Daniel', favoriteColor: 'purple', age: 33 } })
    })

    it("should fail to find user with non-existent Id", () => {
      const users = new UserAPI({ ["1"]: { name: 'Daniel', favoriteColor: 'purple', age: 33 } })
      expect(() => { users.getUserById("3") })
        .toThrow("User was not found")
      expect(users.getUsers())
        .toEqual({ ["1"]: { name: 'Daniel', favoriteColor: 'purple', age: 33 } })
    })
  })

  describe('UserAPI.deleteUserById()', () => {
    it("should delete one user and return deleted user", () => {
      const users = new UserAPI({
        ["1"]: { name: 'Larry', favoriteColor: 'gray', age: 544 },
        ["2"]: { name: 'Daniel', favoriteColor: 'purple', age: 33 },
        ["3"]: { name: 'Jenny', favoriteColor: 'yellow', age: 88 },
      })
      expect(users.deleteUserById('1'))
        .toEqual({ name: 'Larry', favoriteColor: 'gray', age: 544 })
    })

    it("should fail to find user with non-existent Id", () => {
      const users = new UserAPI({
        ["1"]: { name: 'Larry', favoriteColor: 'gray', age: 544 },
        ["2"]: { name: 'Daniel', favoriteColor: 'purple', age: 33 },
        ["3"]: { name: 'Jenny', favoriteColor: 'yellow', age: 88 },
      })
      expect(() => { users.deleteUserById("7") })
        .toThrow("User was not found")
    })
  })

  describe('UserAPI.searchUserByName()', () => {
    it("should return array of two DaNIeL users (ignore letter case)", () => {
      const users = new UserAPI({
        ["1"]: { name: 'Daniel', favoriteColor: 'gray', age: 544 },
        ["2"]: { name: 'Daniel', favoriteColor: 'purple', age: 33 },
        ["3"]: { name: 'Jenny', favoriteColor: 'yellow', age: 88 }
      })
      expect(users.searchUserByName("DaNIeL")).toEqual([
        { name: 'Daniel', favoriteColor: 'gray', age: 544 },
        { name: 'Daniel', favoriteColor: 'purple', age: 33 }
      ])
    })

    it("should fail to find user with name Billy", () => {
      const users = new UserAPI({
        ["1"]: { name: 'Daniel', favoriteColor: 'gray', age: 544 },
        ["2"]: { name: 'Jenny', favoriteColor: 'yellow', age: 33 }
      })
      expect(() => { users.searchUserByName("Billy") })
        .toThrow("User(s) not found")
    })
  })

  describe('UserAPI.searchUsersByFavoriteColor()', () => {
    it("should return array of two same fav color users (ignore letter case)", () => {
      const users = new UserAPI({
        ["1"]: { name: 'Daniel', favoriteColor: 'yellow', age: 544 },
        ["2"]: { name: 'Larry', favoriteColor: 'purple', age: 33 },
        ["3"]: { name: 'Jenny', favoriteColor: 'yellow', age: 88 }
      })
      expect(users.searchUsersByFavoriteColor("YeLlOw"))
        .toEqual([
          { name: 'Daniel', favoriteColor: 'yellow', age: 544 },
          { name: 'Jenny', favoriteColor: 'yellow', age: 88 },
        ])
    })

    it("should fail to find user with favorite color orange", () => {
      const users = new UserAPI({
        ["1"]: { name: 'Daniel', favoriteColor: 'gray', age: 544 },
        ["2"]: { name: 'Daniel', favoriteColor: 'purple', age: 33 },
        ["3"]: { name: 'Jenny', favoriteColor: 'yellow', age: 88 }
      })
      expect(() => { users.searchUsersByFavoriteColor("Orange") })
        .toThrow("User(s) not found")
    })
  })
})
