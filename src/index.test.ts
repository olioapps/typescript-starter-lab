//write tests here
import { UserAPI } from "./index"

const users = new UserAPI()
console.log("USERS", users)

describe('Tests will go here!', () => {
  it('should pass', () => {
    expect(true).toBeTruthy()
  })

  it('gets a user by id', () => {
    const result = users.getUserById()

    expect(result).toStrictEqual(1) 
  })

  it('gets all users', () => {
    const result = users.getUsers()

    expect(result).toStrictEqual(1) 
  }) 

  it('creates a user', () => {
    const result = users.createUser()

    expect(result).toStrictEqual(1) 
  })

  it('deletes a user by id', () => {
    const result = users.deleteUserById()

    expect(result).toStrictEqual(1) 
  })

  it('updates a user by id', () => {
    const result = users.updateUser()

    expect(result).toStrictEqual(1) 
  })
})
