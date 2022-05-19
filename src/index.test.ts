// @ts-nocheck
import UserAPI from "./index"
import { mockUsers } from "./mockdata"

describe("Tests will go here!", () => {
  it("should add a user", () => {
    const users = new UserAPI(mockUsers)

    expect(true).toBeTruthy()
  })
})
