// @ts-nocheck
import UserAPI from "./index"
import {
  mockUsers,
  userObject,
  updatingUserObject,
  updatingUserObjectError,
  updatingUserObjectErrorWithId,
} from "./mockdata"

describe("Tests will go here!", () => {
  beforeEach(() => {})

  it("should make an instance of the UserAPI class and add a user, new user object should have an id.", () => {
    const users = new UserAPI(mockUsers())
    const newUser = users.addUser(userObject)

    expect(users.list).toHaveLength(5)

    expect(newUser).toEqual({ id: expect.any(String), ...userObject })
  })

  it("should show the correct error message, will fail if no errors are thrown", () => {
    const users = new UserAPI(mockUsers())

    try {
      expect(() => users.addUser({})).toThrow()
    } catch (err) {
      expect(err.message).toEqual(
        "you need to at least have a name to add a user"
      )
    }
  })

  it("should show the correct error message, will fail if no errors are thrown", () => {
    const users = new UserAPI(mockUsers())

    try {
      expect(() => users.addUser({})).toThrow()
    } catch (err) {
      expect(err.message).toEqual("Cannot read property 'name' of undefined")
    }
  })

  it("should get the correct user that matches their id", () => {
    const users = new UserAPI(mockUsers())
    const targetUser1 = users.getUserById("1")
    const targetUser2 = users.getUserById("3")

    expect(targetUser1).toEqual({
      age: 23,
      favoriteColor: "black",
      id: "1",
      name: "ted",
    })

    expect(targetUser2).toEqual({
      id: "3",
      name: "tim",
      age: 27,
      favoriteColor: "red",
    })
  })

  it("should throw an Error if no users is found with that id", () => {
    const users = new UserAPI(mockUsers())

    try {
      expect(() => users.getUserById("not a real user")).toThrow()
    } catch (err) {
      expect(err.message).toEqual("Cannot read property 'name' of undefined")
    }
  })

  it("should get a list of all the users, or an empty array other wise", () => {
    const users = new UserAPI(mockUsers())
    const emptyusers = new UserAPI()

    expect(users.getUsers()).toHaveLength(4)

    expect(emptyusers.getUsers()).toEqual([])
  })

  it("should update the users but return an error if user is not found or if the object doesn't have an id ", () => {
    const users = new UserAPI(mockUsers())
    const updatedUser = users.updateUserById(updatingUserObject)

    expect(updatedUser).toEqual({
      id: "0",
      name: "minoka",
      age: 100,
      favoriteColor: "red",
    })

    try {
      users.updateUserById(updatingUserObjectError)
    } catch (err) {
      expect(err.message).toEqual("We can not update a user without an id")
    }

    try {
      users.updateUserById(updatingUserObjectErrorWithId)
    } catch (err) {
      expect(err.message).toEqual("There are no users found with that id.")
    }
  })

  it("should be able to delete a user, and it should return the delete user.", () => {
    const users = new UserAPI(mockUsers())
    expect(users.list).toHaveLength(4)

    const deletedUser = users.deleteUserById("3")

    expect(deletedUser).toEqual({
      age: 27,
      favoriteColor: "red",
      id: "3",
      name: "tim",
    })

    expect(users.list).toHaveLength(3)

    try {
      users.deleteUserById("3")
    } catch (err) {
      expect(err.message).toEqual("There are no users found with that id.")
    }
  })

  it("should return empty array or an array of users with any part of the their name matching the input argument.", () => {
    const users = new UserAPI(mockUsers())
    const emptyArray = users.searchUserByName("not a real search")

    expect(emptyArray).toEqual([])

    const firstSearch = users.searchUserByName("Mino")

    expect(firstSearch).toHaveLength(1)

    const secondSearch = users.searchUserByName("tEd")

    expect(secondSearch).toHaveLength(1)

    const thirdSearch = users.searchUserByName("o")

    expect(thirdSearch).toHaveLength(2)
  })
})
