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
      expect(() => users.getUserById(10)).toThrow()
      try {
           users.getUserById(10)
      } catch (error: any) {
          expect(error).toBeInstanceOf(CustomError)
          expect(error.message).toBe("No user found.")
          expect(error.status).toEqual(404)
      }
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
    expect(() => noUsers.getUsers()).toThrow()

    try {
      noUsers.getUsers()
    } catch (error: any) {
        expect(error).toBeInstanceOf(CustomError)
        expect(error.message).toBe("No users found.")
        expect(error.status).toEqual(404)
    }
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
    const newUser = {
        id: 1,
        name: "Michelle",
        color: "rainbow",
        age: 30,
    }

    expect(() => users.createUser(newUser)).toThrow()
      try {
      users.createUser(newUser)
    } catch (error: any) {
        expect(error).toBeInstanceOf(CustomError)
        expect(error.message).toBe("User with id already exists.")
        expect(error.status).toEqual(405)
    } 
  })

  it('deletes a user by id', () => {
    const result = users.deleteUserById(1)

    expect(result).toStrictEqual({
        id: 1,
        name: "Michelle",
        age: 30,
        color: "rainbow",
    }) 
  }) 

  it('returns CustomError if deleted user id does not exist', () => {
    expect(() => users.deleteUserById(10)).toThrow()
    
    try {
        users.deleteUserById(10)
      } catch (error: any) {
          expect(error).toBeInstanceOf(CustomError)
          expect(error.message).toBe("No user with that id found.")
          expect(error.status).toEqual(404)
      } 
  })  

  it('updates a user by id', () => {
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

  it('returns CustomError if user with same id but different name already exists', () => {
    const updatedUser = {
        id: 1,
        name: "John",
        age: 29,
        color: "red",
    }
    
    expect(() => users.updateUser(1, updatedUser)).toThrow()

    try {
        users.updateUser(1, updatedUser)
      } catch (error: any) {
          expect(error).toBeInstanceOf(CustomError)
          expect(error.message).toBe("Different user with same id already exists.")
          expect(error.status).toEqual(405)
      } 
  })

  it('returns CustomError if user by id does not exist', () => {
    const updatedUser = {
        id: 10,
        name: "Michelle",
        age: 29,
        color: "red",
    }
    
    expect(() => users.updateUser(10, updatedUser)).toThrow()

    try {
        users.updateUser(10, updatedUser)
      } catch (error: any) {
          expect(error).toBeInstanceOf(CustomError)
          expect(error.message).toBe("No user found by that id.")
          expect(error.status).toEqual(404)
      } 
  })
})
 