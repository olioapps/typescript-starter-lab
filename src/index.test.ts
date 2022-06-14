import { UserAPI, IUser } from "./index"

describe('UserAPI() objects and method ', () => {

  describe('creating a new UserAPI() object', () => {

    it("should confirm users is a UserAPI object", () => {
      const users = new UserAPI()
      expect(users).toBeInstanceOf(UserAPI)
    })

    it("should return empty object", () => {
      const users = new UserAPI()
      const actual: ReadonlyArray<IUser> = users.getUsers()
      const expected: ReadonlyArray<IUser> = new Array
      expect(expected).toEqual(actual)
    })

    it("should instantiate object with two values", () => {
      const users = new UserAPI({
        ["1"]: { name: 'Daniel', favoriteColor: 'purple', age: 33, id: "1" },
        ["2"]: { name: 'Jenny', favoriteColor: 'yellow', age: 129, id: "2" }
      })
      const actual: ReadonlyArray<IUser> = users.getUsers()
      const expected: ReadonlyArray<IUser> = [
        { name: 'Daniel', favoriteColor: 'purple', age: 33, id: "1" },
        { name: 'Jenny', favoriteColor: 'yellow', age: 129, id: "2" }
      ]
      expect(expected).toEqual(actual)
    })
  })

  describe('UserAPI.getUsers()', () => {

    it("should return empty array of objects", () => {
      const users = new UserAPI()
      const actual: ReadonlyArray<IUser> = users.getUsers()
      const expected: ReadonlyArray<IUser> = new Array
      expect(expected).toEqual(actual)
    })

    it("should return array of two users", () => {
      const users = new UserAPI({
        ["1"]: { name: 'Daniel', favoriteColor: 'purple', age: 33, id: "1" },
        ["2"]: { name: 'Jenny', favoriteColor: 'yellow', age: 129, id: "2" }
      })
      const actual: ReadonlyArray<IUser> = users.getUsers()
      const expected: ReadonlyArray<IUser> = [
        { name: 'Daniel', favoriteColor: 'purple', age: 33, id: "1" },
        { name: 'Jenny', favoriteColor: 'yellow', age: 129, id: "2" }
      ]
      expect(expected).toEqual(actual)
    })
  })

  describe('UserAPI.addUser()', () => {

    const users = new UserAPI()
    let user: IUser = <IUser>{}

    it("should successfully add and return new user", () => {
      user = users.addUser({ name: 'Daniel', favoriteColor: 'purple', age: 33 })
      const actual: Readonly<IUser> = user
      const expected: Readonly<IUser> = { name: 'Daniel', favoriteColor: 'purple', age: 33, id: user.id }
      expect(expected).toEqual(actual)
    })

    it("should return the updated list of users", () => {
      const actual: ReadonlyArray<IUser> = users.getUsers()
      const expected: ReadonlyArray<IUser> = [user]
      expect(expected).toEqual(actual)
    })

    it("should fail to add user if Id is provided", () => {
      const userWithId: Readonly<IUser> = { name: 'Daniel', favoriteColor: 'green', age: 33, id: "2" }
      const actual: {} = () => { users.addUser(userWithId) }
      expect(actual).toThrow("Id incorrectly provided by input user")
    })

    it("should fail to add user with same props", () => {
      const userDuplicate: Readonly<IUser> = { name: 'Daniel', favoriteColor: 'purple', age: 33 }
      const actual: {} = () => { users.addUser(userDuplicate) }
      expect(actual).toThrow("User with these properties already exists")
    })
  })

  describe('UserAPI.getUserById()', () => {

    const users = new UserAPI({ ["1"]: { name: 'Daniel', favoriteColor: 'purple', age: 33, id: "1" } })

    it("should return a user", () => {
      const actual: Readonly<IUser> = users.getUserById("1")
      const expected: Readonly<IUser> = { name: 'Daniel', favoriteColor: 'purple', age: 33, id: "1" }
      expect(expected).toEqual(actual)
    })

    it("should fail to find user with non-existent Id", () => {
      const actual: {} = () => { users.getUserById("3") }
      expect(actual).toThrow("User was not found")
    })
  })

  describe('UserAPI.deleteUserById()', () => {

    const users = new UserAPI({
      ["1"]: { name: 'Larry', favoriteColor: 'gray', age: 544, id: "1" },
      ["2"]: { name: 'Daniel', favoriteColor: 'purple', age: 33, id: "2" },
      ["3"]: { name: 'Jenny', favoriteColor: 'yellow', age: 88, id: "3" }
    })

    it("should delete then return deleted user", () => {
      const actual: Readonly<IUser> = users.deleteUserById('1')
      const expected: Readonly<IUser> = { name: 'Larry', favoriteColor: 'gray', age: 544, id: "1" }
      expect(expected).toEqual(actual)
    })

    it("should return an array of remaining users", () => {
      const actual: ReadonlyArray<IUser> = users.getUsers()
      const expected: ReadonlyArray<IUser> = [
        { name: 'Daniel', favoriteColor: 'purple', age: 33, id: "2" },
        { name: 'Jenny', favoriteColor: 'yellow', age: 88, id: "3" }
      ]
      expect(expected).toEqual(actual)
    })

    it("should fail to find user with non-existent Id", () => {
      const actual: {} = () => { users.deleteUserById("7") }
      expect(actual).toThrow("User was not found")
    })
  })

  describe('UserAPI.searchUserByName()', () => {

    const users = new UserAPI({
      ["1"]: { name: 'Daniel', favoriteColor: 'gray', age: 544, id: "1" },
      ["2"]: { name: 'Daniel', favoriteColor: 'purple', age: 33, id: "2" },
      ["3"]: { name: 'Jenny', favoriteColor: 'yellow', age: 88, id: "3" }
    })

    it("should return array of two users", () => {
      const actual: ReadonlyArray<IUser> = users.searchUserByName("DaNIeL")
      const expected: ReadonlyArray<IUser> = [
        { name: 'Daniel', favoriteColor: 'gray', age: 544, id: "1" },
        { name: 'Daniel', favoriteColor: 'purple', age: 33, id: "2" }
      ]
      expect(expected).toEqual(actual)
    })

    it("should fail to find user", () => {
      const actual: {} = () => { users.searchUserByName("Billy") }
      expect(actual).toThrow("User(s) not found")
    })
  })

  describe('UserAPI.searchUsersByFavoriteColor()', () => {

    const users = new UserAPI({
      ["1"]: { name: 'Daniel', favoriteColor: 'yellow', age: 544, id: "1" },
      ["2"]: { name: 'Larry', favoriteColor: 'purple', age: 33, id: "2" },
      ["3"]: { name: 'Jenny', favoriteColor: 'yellow', age: 88, id: "3" }
    })

    it("should find all favorite color users", () => {
      const actual: ReadonlyArray<IUser> = users.searchUsersByFavoriteColor("YeLlOw")
      const expected: ReadonlyArray<IUser> = [
        { name: 'Daniel', favoriteColor: 'yellow', age: 544, id: "1" },
        { name: 'Jenny', favoriteColor: 'yellow', age: 88, id: "3" },
      ]
      expect(expected).toEqual(actual)
    })

    it("should fail to find any users", () => {
      const actual: {} = () => { users.searchUsersByFavoriteColor("Orange") }
      expect(actual).toThrow("User(s) not found")
    })
  })
})
