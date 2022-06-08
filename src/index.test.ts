import { UserAPI } from "./index"

describe('Create UserAPI object', () => {

  const x = new UserAPI()

  it("should confirm x is a UserAPI object", () => {
    expect(x).toBeInstanceOf(UserAPI)
  })

})

describe('Adding new user to UserAPI object', () => {

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
