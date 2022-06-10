import { UserAPI } from "./index"

describe('UserAPI() class and methods', () => {

  describe('creating a new UserAPI() object', () => {

    it("should confirm users is a UserAPI object", () => {
      const users = new UserAPI()
      expect(users).toBeInstanceOf(UserAPI)
    })

    it("should instantiate an empty UserAPI object", () => {
      const users = new UserAPI()
      expect(users.getUsers())
        .toEqual([])
    })

    it("should instantiate UserAPI object with two values", () => {
      const users = new UserAPI([
        { name: 'Daniel', favoriteColor: 'purple', age: 33, id: "1" },
        { name: 'Jenny', favoriteColor: 'yellow', age: 129, id: "2" }
      ])
      expect(users.getUsers())
        .toEqual([
          { name: 'Daniel', favoriteColor: 'purple', age: 33, id: "1" },
          { name: 'Jenny', favoriteColor: 'yellow', age: 129, id: "2" }
        ])
    })
  })

  describe('UserAPI.addUser()', () => {

    const users = new UserAPI([{ name: 'Larry', favoriteColor: 'gray', age: 544, id: "1" }])

    it("should add and confirm that a new user gets added", () => {
      const newUser = users.addUser({ name: 'Daniel', favoriteColor: 'purple', age: 33 })
      expect(users.getUsers())
        .toEqual([
          { name: 'Larry', favoriteColor: 'gray', age: 544, id: "1" },
          newUser
        ])
    })

    it("should fail to add user if Id is provided", () => {
      const userWithId = { name: 'Daniel', favoriteColor: 'green', age: 33, id: "2" }
      expect(() => { users.addUser(userWithId) })
        .toThrow("Id incorrectly provided by input user")
    })

    it("should fail to add user if user with same props exists", () => {
      const userDuplicate = { name: 'Daniel', favoriteColor: 'purple', age: 33 }
      expect(() => { users.addUser(userDuplicate) })
        .toThrow("User with these properties already exists")
    })
  })

  describe('UserAPI.getUserById()', () => {

    const users = new UserAPI([{ name: 'Larry', favoriteColor: 'gray', age: 544, id: "1" }])

    it("should return a user with the Id of 1", () => {
      expect(users.getUserById("1"))
        .toEqual({ name: 'Larry', favoriteColor: 'gray', age: 544, id: "1" })
    })

    it("should fail to find user with non-existent Id", () => {
      expect(() => { users.getUserById("3") })
        .toThrow("User was not found")
    })
  })

  describe('UserAPI.getUsers()', () => {

    it("should return empty array", () => {
      const users = new UserAPI()
      expect(users.getUsers())
        .toEqual([])
    })

    it("should return array of two users", () => {
      const users = new UserAPI([
        { name: 'Larry', favoriteColor: 'gray', age: 544, id: "1" },
        { name: 'Daniel', favoriteColor: 'green', age: 33, id: "2" }
      ])
      expect(users.getUsers())
        .toEqual([
          { name: 'Larry', favoriteColor: 'gray', age: 544, id: "1" },
          { name: 'Daniel', favoriteColor: 'green', age: 33, id: "2" }
        ])
    })
  })

  describe('UserAPI.deleteUserById()', () => {

    const users = new UserAPI([
      { name: 'Larry', favoriteColor: 'gray', age: 544, id: "1" },
      { name: 'Daniel', favoriteColor: 'green', age: 33, id: "2" },
      { name: 'Jenny', favoriteColor: 'yellow', age: 88, id: "3" }
    ])

    it("should delete one user and return deleted user", () => {
      users.deleteUserById('1')
      expect(users.getUsers())
        .toEqual([
          { name: 'Daniel', favoriteColor: 'green', age: 33, id: "2" },
          { name: 'Jenny', favoriteColor: 'yellow', age: 88, id: "3" }
        ])
    })

    it("should fail to find user with non-existent Id", () => {
      expect(() => { users.deleteUserById("7") })
        .toThrow("User was not found")
    })
  })

  describe('UserAPI.searchUserByName()', () => {

    const users = new UserAPI([
      { name: 'Larry', favoriteColor: 'gray', age: 544, id: "1" },
      { name: 'Daniel', favoriteColor: 'green', age: 33, id: "2" },
      { name: 'Jenny', favoriteColor: 'yellow', age: 88, id: "3" },
      { name: 'Daniel', favoriteColor: 'red', age: 48, id: "4" }
    ])

    it("should return array of two DaNIeL users (ignore letter case)", () => {
      expect(users.searchUserByName("DaNIeL")).toEqual([
        { name: 'Daniel', favoriteColor: 'green', age: 33, id: "2" },
        { name: 'Daniel', favoriteColor: 'red', age: 48, id: "4" }
      ])
    })

    it("should fail to find user with name Billy", () => {
      expect(() => { users.searchUserByName("Billy") })
        .toThrow("User(s) not found")
    })
  })

  describe('UserAPI.searchUsersByFavoriteColor()', () => {

    const users = new UserAPI([
      { name: 'Larry', favoriteColor: 'gray', age: 544, id: "1" },
      { name: 'Daniel', favoriteColor: 'yellow', age: 33, id: "2" },
      { name: 'Jenny', favoriteColor: 'yellow', age: 88, id: "3" },
      { name: 'Daniel', favoriteColor: 'red', age: 48, id: "4" }
    ])

    it("should return array of two same fav color users (ignore letter case)", () => {
      expect(users.searchUsersByFavoriteColor("YeLlOw"))
        .toEqual([
          { name: 'Daniel', favoriteColor: 'yellow', age: 33, id: "2" },
          { name: 'Jenny', favoriteColor: 'yellow', age: 88, id: "3" },
        ])
    })

    it("should fail to find user with favorite color orange", () => {
      expect(() => { users.searchUsersByFavoriteColor("Orange") })
        .toThrow("User(s) not found")
    })
  })
})
