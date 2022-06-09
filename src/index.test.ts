import { UserAPI } from "./index"

describe('Create UserAPI object', () => {

  const x = new UserAPI()

  it("should confirm x is a UserAPI object", () => {
    expect(x).toBeInstanceOf(UserAPI)
  })

})

describe('UserAPI.addUser()', () => {

  const x = new UserAPI([{ name: 'Larry', favoriteColor: 'gray', age: 544, id: "1" }])
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

  const x = new UserAPI([{ name: 'Larry', favoriteColor: 'gray', age: 544, id: "1" }])

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

  it("should return empty array", () => {
    expect(x.getUsers()).toEqual([])
  })

  it("should return array of two users", () => {
    const userOne = x.addUser({ name: 'Larry', favoriteColor: 'gray', age: 544 })
    const userTwo = x.addUser({ name: 'Daniel', favoriteColor: 'green', age: 33 })
    expect(x.getUsers()).toEqual([
      userOne,
      userTwo
    ])
  })

})

describe('UserAPI.deleteUserById()', () => {

  const x = new UserAPI([
    { name: 'Larry', favoriteColor: 'gray', age: 544, id: "1" },
    { name: 'Daniel', favoriteColor: 'green', age: 33, id: "2" },
    { name: 'Jenny', favoriteColor: 'yellow', age: 88, id: "3" }
  ])

  it("should delete one user and return deleted user", () => {
    expect(x.deleteUserById('1')).toEqual({ name: 'Larry', favoriteColor: 'gray', age: 544, id: "1" })
  })

  it("should return array of two remaining users", () => {
    expect(x.getUsers()).toEqual([
      { name: 'Daniel', favoriteColor: 'green', age: 33, id: "2" },
      { name: 'Jenny', favoriteColor: 'yellow', age: 88, id: "3" }
    ])
  })

  it("should fail to find user with now non-existent Id", () => {
    expect(() => {
      x.deleteUserById("1")
    }).toThrow("User was not found")
  })

})

describe('UserAPI.searchUserByName()', () => {

  const x = new UserAPI([
    { name: 'Larry', favoriteColor: 'gray', age: 544, id: "1" },
    { name: 'Daniel', favoriteColor: 'green', age: 33, id: "2" },
    { name: 'Jenny', favoriteColor: 'yellow', age: 88, id: "3" },
    { name: 'Daniel', favoriteColor: 'red', age: 48, id: "4" }
  ])

  it("should return array of two DaNIeL users (ignore letter case)", () => {
    expect(x.searchUserByName("DaNIeL")).toEqual([
      { name: 'Daniel', favoriteColor: 'green', age: 33, id: "2" },
      { name: 'Daniel', favoriteColor: 'red', age: 48, id: "4" }
    ])
  })

  it("should fail to find user with name Billy", () => {
    expect(() => {
      x.searchUserByName("Billy")
    }).toThrow("User(s) not found")
  })

})

describe('UserAPI.searchUsersByFavoriteColor()', () => {

  const x = new UserAPI([
    { name: 'Larry', favoriteColor: 'gray', age: 544, id: "1" },
    { name: 'Daniel', favoriteColor: 'yellow', age: 33, id: "2" },
    { name: 'Jenny', favoriteColor: 'yellow', age: 88, id: "3" },
    { name: 'Daniel', favoriteColor: 'red', age: 48, id: "4" }
  ])

  it("should return array of two users with same fav (ignore letter case)", () => {
    expect(x.searchUsersByFavoriteColor("YeLlOw")).toEqual([
      { name: 'Daniel', favoriteColor: 'yellow', age: 33, id: "2" },
      { name: 'Jenny', favoriteColor: 'yellow', age: 88, id: "3" },
    ])
  })

  it("should fail to find user with favorite color orange", () => {
    expect(() => {
      x.searchUsersByFavoriteColor("Orange")
    }).toThrow("User(s) not found")
  })

})
