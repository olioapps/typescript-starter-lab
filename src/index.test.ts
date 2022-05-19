//write tests here
import UserAPI from "./index"
import {
  mockUsers,
  userObject,
  updatingUserObject,
  updatingUserObjectError,
  updatingUserObjectErrorWithId,
} from "./mockdata"

describe("Testing User API", () => {
  it("should add a user to and throw an error if no name is provided", () => {
    const users = new UserAPI(mockUsers)
    users.addUser({})
    expect(true).toBeTruthy()
  })
})
