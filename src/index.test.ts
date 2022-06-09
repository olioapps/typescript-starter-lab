import { UserAPI, IUser } from './index'

describe(UserAPI, () => {
  it('check that UserAPI is initialized', () => {
    const seedUsers: Array<IUser> = [{ 
      id: "1", 
        name: "andy", 
        favColor: "blue", 
        age: 247 
      }]
    const x = new UserAPI(seedUsers)
    expect(x).toBeInstanceOf(UserAPI)
  })
  it("getUsers() returns intitial seed data", () => {
    const seedUsers: Array<IUser> = [{ 
      id: "1", 
        name: "andy", 
        favColor: "blue", 
        age: 247 
      }]
    const x = new UserAPI(seedUsers)
    expect(x.getUsers()).toEqual(seedUsers)
  })
  
  it("addUser() correctly adds a user with a random id", () => {
    const seedUsers: Array<IUser> = [{ 
      id: "1", 
        name: "andy", 
        favColor: "blue", 
        age: 247 
    }]
    const user2 = {
      name: "Andy",
      favColor: "Green",
      age: 200
    }
    const x = new UserAPI(seedUsers)
    const newUser = x.addUser(user2)
    expect(x.getUsers()).toEqual([seedUsers[0], newUser])
  })

  it("addUser() throws error when duplicating user info", () => {
    const seedUsers: Array<IUser> = [{ 
      id: "1", 
        name: "andy", 
        favColor: "blue", 
        age: 247 
    }]
    const userDuplicate = {
      name: "andy",
      favColor: "blue",
      age: 247
    }
    const x = new UserAPI(seedUsers)
    expect( () => {x.addUser(userDuplicate)}).toThrow(Error)
  })

  it("addUser() throws error supplied with pre-existing user.id", () => {
    const seedUsers: Array<IUser> = [{ 
      id: "1", 
        name: "andy", 
        favColor: "blue", 
        age: 247 
    }]
    const userWithId = {
      id: "5",
      name: "andy",
      favColor: "blue",
      age: 200
    }
    const x = new UserAPI(seedUsers)
    expect( () => {x.addUser(userWithId)}).toThrow(Error)
  })

  it('getUserById() returns expected user', () => {
    const seedUsers: Array<IUser> = [    
      { 
      id: "1", 
        name: "andy", 
        favColor: "blue", 
        age: 247 
      },
      { 
        id: "2", 
          name: "Dan", 
          favColor: "blue", 
          age: 150 
      }
    ]
    const x = new UserAPI(seedUsers)
    expect(x.getUserById("2")).toEqual(seedUsers[1])
  })

  it('getUserById() throws error if user with id is not found', () => {
    const seedUsers: Array<IUser> = [    
      { 
      id: "1", 
        name: "andy", 
        favColor: "blue", 
        age: 247 
      },
      { 
        id: "2", 
          name: "Dan", 
          favColor: "blue", 
          age: 150 
      }
    ]
    const x = new UserAPI(seedUsers)
    expect( () => x.getUserById("100")).toThrow(ReferenceError)
  })

  it('getUsers() returns multiple users', () => {
    const seedUsers: Array<IUser> = [{ 
      id: "1", 
        name: "andy", 
        favColor: "blue", 
        age: 247 
    }]
    const user2 = {
      name: "Andy",
      favColor: "Green",
      age: 200
    } 
    const user3 = {
      name: "Sarah",
      favColor: "Blue",
      age: 200
    } 
    const x = new UserAPI(seedUsers)
    const newUser2 = x.addUser(user2)
    const newUser3 = x.addUser(user3)

    expect(x.getUsers()).toEqual([seedUsers[0], newUser2, newUser3])
  })

  it('deleteUserById() deletes user with given id', () => {
    const seedUsers: Array<IUser> = [{ 
      id: "1", 
        name: "andy", 
        favColor: "blue", 
        age: 247 
    }]
    const user2 = {
      name: "Andy",
      favColor: "Green",
      age: 200
    } 
    const x = new UserAPI(seedUsers)
    const newUser2 = x.addUser(user2)
    x.deleteUserById("1")
    expect(x.getUsers()).toEqual([newUser2])
  })
  it('deleteUserById() throws error if user is not found', () => {
    const seedUsers: Array<IUser> = [{ 
      id: "1", 
        name: "andy", 
        favColor: "blue", 
        age: 247 
    }]

    const x = new UserAPI(seedUsers)
    expect( () => {x.deleteUserById("100")}).toThrow(ReferenceError)
  })

  it('searchUserByName() returns all instances of given name, independant of capitals', () => {
    const seedUsers: Array<IUser> = [{ 
      id: "1", 
        name: "andy", 
        favColor: "blue", 
        age: 247 
    }]
    const user2 = {
      name: "Andy",
      favColor: "Green",
      age: 200
    } 
    const user3 = {
      name: "Sarah",
      favColor: "Blue",
      age: 200
    } 
    const x = new UserAPI(seedUsers)
    const newUser2 = x.addUser(user2)
    x.addUser(user3)
    expect(x.searchUserByName("Andy")).toEqual([seedUsers[0], newUser2])
  })
  it('searchUserByName() throws error if no user is found', () => {
    const seedUsers: Array<IUser> = [{ 
      id: "1", 
        name: "andy", 
        favColor: "blue", 
        age: 247 
    }]
    const x = new UserAPI(seedUsers)

    expect( () => x.searchUserByName("Jessica")).toThrow(ReferenceError)
  })

  it('searchUserByFavoriteColor() returns all instances users with given fav color, independant of capitals', () => {
    const seedUsers: Array<IUser> = [{ 
      id: "1", 
        name: "andy", 
        favColor: "blue", 
        age: 247 
    }]
    const user2 = {
      name: "Andy",
      favColor: "Green",
      age: 200
    } 
    const user3 = {
      name: "Sarah",
      favColor: "Blue",
      age: 200
    } 
    const x = new UserAPI(seedUsers)
    x.addUser(user2)
    const newUser3 = x.addUser(user3)
    expect(x.searchUsersByFavoriteColor("blue")).toEqual([seedUsers[0], newUser3])
  })
  it('searchUserByFavoriteColor() throws error if no user is found with given fav color', () => {
    const seedUsers: Array<IUser> = [{ 
      id: "1", 
        name: "andy", 
        favColor: "blue", 
        age: 247 
    }]
    const x = new UserAPI(seedUsers)

    expect( () => x.searchUsersByFavoriteColor("Pink")).toThrow(ReferenceError)
  })
  
})