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
})
