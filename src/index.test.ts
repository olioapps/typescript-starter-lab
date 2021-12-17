//write tests here
import { CustomError, UserAPI } from "./index"

describe('Tests will go here!', () => {
    let users: UserAPI

    beforeEach(() => {
      users = new UserAPI(
        [
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
        ]
      ) 
    })

  it('gets a user by id', () => {
    const result = users.getUserById(2)

    expect(result).toStrictEqual({
        id: 2,
        name: "Vintage Aaron",
        age: 35,
        color: "blue",
    }) 
  }) 

  it('returns an error if there is no user matching id', () => {
      const result = users.getUserById(10)

      expect(result).toBeInstanceOf(CustomError)
  }) 

  it('gets all users', () => {
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

  it('returns CustomError if no users are found', () => {
      const noUsers = new UserAPI([])
      const result = noUsers.getUsers()

      expect(result).toBeInstanceOf(CustomError)
  })

  it('creates a user', () => {
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

  it('returns CustomError if user id already exists', () => {
      const result = users.createUser({
          id: 1,
          name: "Michelle",
          color: "rainbow",
          age: 30,
      })

      expect(result).toBeInstanceOf(CustomError)
  })

//   it.skip('deletes a user by id', () => {
//     const result = users.deleteUserById(1)

//     expect(result).toStrictEqual({
//         id: 1,
//         name: "Michelle",
//         age: 30,
//         color: "rainbow",
//     }) 
//   })

//   it.skip('returns null if deleted user id does not exist', () => {
//     const result = users.deleteUserById(5)

//     expect(result).toStrictEqual(false) 
//   })

//   it.skip('updates a user by id', () => {
//     const result = users.updateUser(1, { 
//         name: "Michelle",
//         age: 29,
//         color: "red",
//     })

//     expect(result).toStrictEqual({
//         id: 1,
//         name: "Michelle",
//         age: 29,
//         color: "red",
//     }) 
//   })

//   it.skip('returns null if user with same id already exists', () => {
//     const result = users.updateUser(1, { 
//         id: 2,
//         name: "Michelle",
//         age: 29,
//         color: "red",
//     })

//     expect(result).toStrictEqual(null) 
//   })
})
