//write tests here
import { UserAPI } from "./index"

describe('Tests will go here!', () => {
  it('gets a user by id', () => {
    const users = new UserAPI()
    const result = users.getUserById(2)

    expect(result).toStrictEqual({
        id: 2,
        name: "Vintage Aaron",
        age: 35,
        color: "blue",
    }) 
  })

  it.skip('returns no user found if there is no user matching id', () => {
    const users = new UserAPI()
      const result = users.getUserById(10)

      expect(result).toStrictEqual(
          "No user found."
      )
  })

  it.skip('gets all users', () => {
    const users = new UserAPI()
    const result = users.getUsers()

    expect(result).toStrictEqual([
        {
            id: 1,
            name: "Michelle",
            age: 30,
            color: "rainbow",
        },
        {
            id: 2,
            name: "Vintage Aaron",
            age: 35,
            color: "blue",
        },
        {
            id: 3,
            name: "Derek",
            age: 28,
            color: "green",
        },
        {
            name: "George",
            age: 32,
            color: "red",
        },
    ]) 
  }) 

  it.skip('creates a user', () => {
    const users = new UserAPI()
    const newUser = {
        id: 4,
        name: "Yoda",
        age: 10,
        color: "Brown",
    }
    const result = users.createUser(newUser)

    expect(result).toStrictEqual({
        id: 4,
        name: "Yoda",
        age: 10,
        color: "Brown",
    }) 
  })

  it.skip('deletes a user by id', () => {
    const users = new UserAPI()
    const result = users.deleteUserById(1)

    expect(result).toStrictEqual({
        id: 1,
        name: "Michelle",
        age: 30,
        color: "rainbow",
    }) 
  })

  it.skip('updates a user by id', () => {
    const users = new UserAPI()
    const result = users.updateUser(1, { 
        name: "Michelle",
        age: 29,
        color: "red",
    })

    expect(result).toStrictEqual({
        id: 1,
        name: "Michelle",
        age: 29,
        color: "red",
    }) 
  })
})
