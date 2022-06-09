import { UserAPI } from "./index"

describe('new UserAPI()', () => {

  const x = new UserAPI()

  it("should confirm x is a UserAPI object", () => {
    expect(x).toBeInstanceOf(UserAPI)
  })
})

describe('UserAPI.addUser()', () => {

  it("should return the new user", () => {
    const x = new UserAPI({ ["1"]: { name: 'Larry', favoriteColor: 'red', age: 99 } })
    jest.spyOn(Date, "now").mockReturnValue(new Date(1587893830000).getTime())

    expect(x.addUser({ name: 'Daniel', favoriteColor: 'purple', age: 33 }))
      .toEqual({ name: 'Daniel', favoriteColor: 'purple', age: 33 })

    expect(x.getUsers())
      .toEqual({
        ["1"]: { name: 'Larry', favoriteColor: 'red', age: 99 },
        ["1587893830000"]: { name: 'Daniel', favoriteColor: 'purple', age: 33 }
      })

  })

  it("should fail to add user if Id is provided", () => {
    const x = new UserAPI()
    const userWithId = { name: 'Daniel', favoriteColor: 'green', age: 33, id: "2" }
    expect(() => { x.addUser(userWithId) })
      .toThrow("Id incorrectly provided by input user")
    expect(x.getUsers())
      .toEqual({})
  })

  it("should fail to add user if user with same props exists", () => {
    const x = new UserAPI({ ["1"]: { name: 'Daniel', favoriteColor: 'purple', age: 33 } })
    const userDuplicate = { name: 'Daniel', favoriteColor: 'purple', age: 33 }
    expect(() => { x.addUser(userDuplicate) })
      .toThrow("User with these properties already exists")
    expect(x.getUsers())
      .toEqual({ ["1"]: { name: 'Daniel', favoriteColor: 'purple', age: 33 } })
  })

})

describe('UserAPI.getUserById()', () => {

  it("should return a user with the Id of 1", () => {
    const x = new UserAPI({ ["1"]: { name: 'Daniel', favoriteColor: 'purple', age: 33 } })
    expect(x.getUserById("1"))
      .toEqual({ name: 'Daniel', favoriteColor: 'purple', age: 33 })
    expect(x.getUsers())
      .toEqual({ ["1"]: { name: 'Daniel', favoriteColor: 'purple', age: 33 } })
  })

  it("should fail to find user with non-existent Id", () => {
    const x = new UserAPI({ ["1"]: { name: 'Daniel', favoriteColor: 'purple', age: 33 } })
    expect(() => { x.getUserById("3") })
      .toThrow("User was not found")
    expect(x.getUsers())
      .toEqual({ ["1"]: { name: 'Daniel', favoriteColor: 'purple', age: 33 } })
  })
})

// describe('UserAPI.getUsers()', () => {

//   it("should return empty array", () => {
//     const x = new UserAPI()
//     expect(x.getUsers())
//       .toEqual([])
//   })

//   it("should return array of two users", () => {
//     const x = new UserAPI([
//       { name: 'Larry', favoriteColor: 'gray', age: 544, id: "1" },
//       { name: 'Daniel', favoriteColor: 'green', age: 33, id: "2" }
//     ])
//     expect(x.getUsers())
//       .toEqual([
//         { name: 'Larry', favoriteColor: 'gray', age: 544, id: "1" },
//         { name: 'Daniel', favoriteColor: 'green', age: 33, id: "2" }
//       ])
//   })
// })

// describe('UserAPI.deleteUserById()', () => {

//   it("should delete one user and return deleted user", () => {
//     const x = new UserAPI([
//       { name: 'Larry', favoriteColor: 'gray', age: 544, id: "1" },
//       { name: 'Daniel', favoriteColor: 'green', age: 33, id: "2" },
//       { name: 'Jenny', favoriteColor: 'yellow', age: 88, id: "3" }
//     ])
//     expect(x.deleteUserById('1'))
//       .toEqual({ name: 'Larry', favoriteColor: 'gray', age: 544, id: "1" })
//     expect(x.getUsers())
//       .toEqual([
//         { name: 'Daniel', favoriteColor: 'green', age: 33, id: "2" },
//         { name: 'Jenny', favoriteColor: 'yellow', age: 88, id: "3" }
//       ])
//   })

//   it("should fail to find user with non-existent Id", () => {
//     const x = new UserAPI([
//       { name: 'Larry', favoriteColor: 'gray', age: 544, id: "1" }
//     ])
//     expect(() => { x.deleteUserById("7") })
//       .toThrow("User was not found")
//     expect(x.getUsers())
//       .toEqual([{ name: 'Larry', favoriteColor: 'gray', age: 544, id: "1" }])
//   })
// })

// describe('UserAPI.searchUserByName()', () => {

//   it("should return array of two DaNIeL users (ignore letter case)", () => {
//     const x = new UserAPI([
//       { name: 'Larry', favoriteColor: 'gray', age: 544, id: "1" },
//       { name: 'Daniel', favoriteColor: 'green', age: 33, id: "2" },
//       { name: 'Jenny', favoriteColor: 'yellow', age: 88, id: "3" },
//       { name: 'Daniel', favoriteColor: 'red', age: 48, id: "4" }
//     ])
//     expect(x.searchUserByName("DaNIeL")).toEqual([
//       { name: 'Daniel', favoriteColor: 'green', age: 33, id: "2" },
//       { name: 'Daniel', favoriteColor: 'red', age: 48, id: "4" }
//     ])
//     expect(x.getUsers())
//       .toEqual([
//         { name: 'Larry', favoriteColor: 'gray', age: 544, id: "1" },
//         { name: 'Daniel', favoriteColor: 'green', age: 33, id: "2" },
//         { name: 'Jenny', favoriteColor: 'yellow', age: 88, id: "3" },
//         { name: 'Daniel', favoriteColor: 'red', age: 48, id: "4" }
//       ])
//   })

//   it("should fail to find user with name Billy", () => {
//     const x = new UserAPI([
//       { name: 'Larry', favoriteColor: 'gray', age: 544, id: "1" },
//       { name: 'Daniel', favoriteColor: 'red', age: 48, id: "2" }
//     ])
//     expect(() => { x.searchUserByName("Billy") })
//       .toThrow("User(s) not found")
//     expect(x.getUsers())
//       .toEqual([
//         { name: 'Larry', favoriteColor: 'gray', age: 544, id: "1" },
//         { name: 'Daniel', favoriteColor: 'red', age: 48, id: "2" }
//       ])
//   })
// })

// describe('UserAPI.searchUsersByFavoriteColor()', () => {

//   it("should return array of two same fav color users (ignore letter case)", () => {
//     const x = new UserAPI([
//       { name: 'Larry', favoriteColor: 'gray', age: 544, id: "1" },
//       { name: 'Daniel', favoriteColor: 'yellow', age: 33, id: "2" },
//       { name: 'Jenny', favoriteColor: 'yellow', age: 88, id: "3" },
//       { name: 'Daniel', favoriteColor: 'red', age: 48, id: "4" }
//     ])
//     expect(x.searchUsersByFavoriteColor("YeLlOw"))
//       .toEqual([
//         { name: 'Daniel', favoriteColor: 'yellow', age: 33, id: "2" },
//         { name: 'Jenny', favoriteColor: 'yellow', age: 88, id: "3" },
//       ])
//     expect(x.getUsers())
//       .toEqual([
//         { name: 'Larry', favoriteColor: 'gray', age: 544, id: "1" },
//         { name: 'Daniel', favoriteColor: 'yellow', age: 33, id: "2" },
//         { name: 'Jenny', favoriteColor: 'yellow', age: 88, id: "3" },
//         { name: 'Daniel', favoriteColor: 'red', age: 48, id: "4" }
//       ])
//   })

//   it("should fail to find user with favorite color orange", () => {
//     const x = new UserAPI([
//       { name: 'Larry', favoriteColor: 'gray', age: 544, id: "1" },
//       { name: 'Daniel', favoriteColor: 'yellow', age: 33, id: "2" }
//     ])
//     expect(() => { x.searchUsersByFavoriteColor("Orange") })
//       .toThrow("User(s) not found")
//     expect(x.getUsers())
//       .toEqual([
//         { name: 'Larry', favoriteColor: 'gray', age: 544, id: "1" },
//         { name: 'Daniel', favoriteColor: 'yellow', age: 33, id: "2" }
//       ])
//   })
// })
