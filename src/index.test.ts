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
  it("should make an instance of the UserAPI class and add a user, new user object should have an id.", () => {
    const users = new UserAPI(mockUsers)
    const newUser = users.addUser(userObject)

    expect(users.list).toHaveLength(5)
    expect(newUser).toEqual({ id: expect.any(String), ...userObject })
    expect(() => users.addUser({})).toThrow(
      "you need to at least have a name to add a user"
    )
  })
  it("should get the correct user that matches their id and throw an error if there is no one with that id", () => {
    const users = new UserAPI(mockUsers)
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
    expect(() => users.getUserById("this is not a real id")).toThrow(
      "There are no users found with that id."
    )
  })
})
