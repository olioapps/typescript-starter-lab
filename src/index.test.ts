// //write tests here
import { CustomError, EventScoreAPI, UserAPI } from "./index"

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
    
    expect(users.getUsers()).toStrictEqual([
        {
            id: 1,
            name: "Michelle",
            age: 29,
            color: "red",
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

describe('EventScore API', () => {
    it('Returns an entire array if it is five events or less', () => {
        const events = new EventScoreAPI([
            {
                timestamp: 123123123,
                eventType: "new message",
            },
            {
                timestamp: 123123124,
                eventType: "new message",
            },
            {
                timestamp: 123123125,
                eventType: "new message",
            },
        ])

        const result = events.calcHighestScoreArrSequence()

        expect(result).toStrictEqual([
            {
                timestamp: 123123123,
                eventType: "new message",
            },
            {
                timestamp: 123123124,
                eventType: "new message",
            },
            {
                timestamp: 123123125,
                eventType: "new message",
            },
        ])
    })

    it('Returns an empty array if there are no events', () => {
        const events = new EventScoreAPI([])

        const result = events.calcHighestScoreArrSequence()

        expect(result).toStrictEqual([])
    })

    it('Returns an array of five events if the array length is five', () => {
        const events = new EventScoreAPI([
            {
                timestamp: 123123123,
                eventType: "new message",
            },
            {
                timestamp: 123123124,
                eventType: "new message",
            },
            {
                timestamp: 123123125,
                eventType: "new message",
            },
            {
                timestamp: 123123124,
                eventType: "new message",
            },
            {
                timestamp: 123123125,
                eventType: "new message",
            },
        ])

        const result = events.calcHighestScoreArrSequence()

        expect(result).toStrictEqual([
            {
                timestamp: 123123123,
                eventType: "new message",
            },
            {
                timestamp: 123123124,
                eventType: "new message",
            },
            {
                timestamp: 123123125,
                eventType: "new message",
            },
            {
                timestamp: 123123124,
                eventType: "new message",
            },
            {
                timestamp: 123123125,
                eventType: "new message",
            },
        ])
    })

    it('Returns a subarray - no greater than 5 contiguous elements - where the total event type score is the highest', () => {
        const events = new EventScoreAPI([
            {
                timestamp: 123123123,
                eventType: "new message",
            },
            {
                timestamp: 123123124,
                eventType: "view",
            },
            {
                timestamp: 123123125,
                eventType: "screenshot",
            },
            {
                timestamp: 123123125,
                eventType: "screenshot",
            },
            {
                timestamp: 123123125,
                eventType: "screenshot",
            },
            {
                timestamp: 123123125,
                eventType: "screenshot",
            },
            {
                timestamp: 123123125,
                eventType: "view",
            },
            {
                timestamp: 123123125,
                eventType: "screenshot",
            },
            {
                timestamp: 123123125,
                eventType: "new message",
            },
            {
                timestamp: 123123125,
                eventType: "screenshot",
            },
            {
                timestamp: 123123125,
                eventType: "screenshot",
            },
            {
                timestamp: 123123125,
                eventType: "screenshot",
            },
        ])
        const result = events.calcHighestScoreArrSequence()

        expect(result).toStrictEqual([
            {
                timestamp: 123123124,
                eventType: "view",
            },
            {
                timestamp: 123123125,
                eventType: "screenshot",
            },
            {
                timestamp: 123123125,
                eventType: "screenshot",
            },
            {
                timestamp: 123123125,
                eventType: "screenshot",
            },
            {
                timestamp: 123123125,
                eventType: "screenshot",
            },
        ])
    })
})
