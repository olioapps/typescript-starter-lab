import { UserAPI } from "./index"

describe('Create UserAPI object', () => {

  const x = new UserAPI()

  it("should confirm x is a UserAPI object", () => {
    expect(x).toBeInstanceOf(UserAPI)
  })

})

describe('UserAPI.addUser()', () => {

  const x = new UserAPI()
  const user = { name: 'Daniel', favoriteColor: 'purple', age: 33 }

  it("should return seed object and new user", () => {
    expect(x.addUser(user)).toEqual(user)
  })

  it("should fail to add user if Id is provided", () => {
    const userWithId = { name: 'Daniel', favoriteColor: 'green', age: 33, id: "2" }
    expect(() => {
      x.addUser(userWithId)
    }).toThrow("Id incorrectly provided by input user")
  })

  it("should fail to add user if user with same props exists", () => {
    const userDuplicate = { name: 'Larry', favoriteColor: 'gray', age: 544 }
    expect(() => {
      x.addUser(userDuplicate)
    }).toThrow("User with these properties already exists")
  })

})

describe('UserAPI.getUserById()', () => {

  const x = new UserAPI()

  it("should return a user with the Id of 1", () => {
    expect(x.getUserById("1")).toEqual({ name: 'Larry', favoriteColor: 'gray', age: 544, id: "1" })
  })

  it("should fail to find user with non-existent Id", () => {
    expect(() => {
      x.getUserById("3")
    }).toThrow("User was not found")
  })

})

describe('UserAPI.getUsers()', () => {

  const x = new UserAPI()
  const userToAdd = x.addUser({ name: 'Daniel', favoriteColor: 'green', age: 33 })

  it("should return array of two users", () => {
    expect(x.getUsers()).toEqual([
      { name: 'Larry', favoriteColor: 'gray', age: 544, id: "1" },
      userToAdd
    ])
  })

})
