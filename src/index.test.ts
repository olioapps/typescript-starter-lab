import { UserAPI, IUser } from './index'
const seedUsers: Readonly<Record<string, IUser>> = {
  "1": { id: "1", name: "andy", favColor: "blue", age: 247 },
  "2": { id: "2", name: "Andy",  favColor: "purple", age: 150 },
  "3": { id: "3", name: "Sarah", favColor: "Blue", age: 200} 
}

describe(UserAPI, () => {
  const userAPI = new UserAPI(seedUsers)

  it('check that UserAPI is initialized', () => {
    expect(userAPI).toBeInstanceOf(UserAPI)
  })

  describe('getUser()', () => {
    const userAPI = new UserAPI(seedUsers)

    it("getUsers() returns intitial seed data", () => {
      const actual = userAPI.getUsers()
      const expected = Object.values(seedUsers)
      expect(actual).toEqual(expected)
    })
  })
  
  describe('addUser()', () => {
    const userAPI = new UserAPI(seedUsers)

    it('addUser() adds new user to the dataset', () => {
      const user: IUser = { name: "Sarah", favColor: "Blue", age: 150 } 
      const newUser: IUser = userAPI.addUser(user)
      const actual: ReadonlyArray<IUser> = userAPI.getUsers()
      const expected: ReadonlyArray<IUser> = Object.values({...seedUsers, newUser})
      expect(actual).toEqual(expected)
    })
    
    it("addUser() throws error when duplicating user info", () => {
      const userDuplicate = { name: "andy", favColor: "blue", age: 247 }
      const actual= () => {userAPI.addUser(userDuplicate)}
      expect(actual).toThrow(Error)
    })
    
    it("addUser() throws error supplied with pre-existing user.id", () => {
      const userWithId = seedUsers['1']
      const actual = () => {userAPI.addUser(userWithId)}
      expect(actual).toThrow(Error)
    })
  })
  
  describe('getUserById()', () => {
    const userAPI = new UserAPI(seedUsers)

    it('getUserById() returns expected user', () => {
      const actual: IUser = userAPI.getUserById("2")
      const expected: IUser = seedUsers['2']
      expect(actual).toEqual(expected)
    })
  
    it('getUserById() throws error if user with id is not found', () => {
      const actual = () => userAPI.getUserById("100")
      expect(actual).toThrow(ReferenceError)
    })
  })
  
  describe('deleteUserById()', () => {
    const userAPI = new UserAPI(seedUsers)

    it('deleteUserById() deletes user with given id', () => {
      userAPI.deleteUserById("1")
      const actual: ReadonlyArray<IUser> = userAPI.getUsers()
      const expected: ReadonlyArray<IUser> = [ seedUsers['2'], seedUsers['3'] ]

      expect(actual).toEqual(expected)
    })
    
    it('deleteUserById() throws error if user is not found', () => {
      const actual =  () => {userAPI.deleteUserById("100")}
      expect(actual).toThrow(ReferenceError)
    })
  })
  
  describe('searchUserbyName()', () => {
    const userAPI = new UserAPI(seedUsers)

    it('searchUserByName() returns all instances of given name, independant of capitals', () => {
      const actual: ReadonlyArray<IUser> = userAPI.searchUserByName("Andy")
      const expected: ReadonlyArray<IUser>= [ seedUsers['1'], seedUsers['2'] ]
      expect(actual).toEqual(expected)
    })
    
    it('searchUserByName() throws error if no user is found', () => {
      const actual =  () => userAPI.searchUserByName("Jessica")
      expect(actual).toThrow(ReferenceError)
    })
  })
  
  describe('searchUserFavoriteColor()', () => {
    const userAPI = new UserAPI(seedUsers)

    it('searchUserByFavoriteColor() returns all instances users with given fav color, independant of capitals', () => {
      const actual: ReadonlyArray<IUser> = userAPI.searchUsersByFavoriteColor("blue")
      const expected: ReadonlyArray<IUser> = [ seedUsers['1'], seedUsers['3'] ]
      expect(actual).toEqual(expected)
    })
    
    it('searchUserByFavoriteColor() throws error if no user is found with given fav color', () => {
      const actual =  () => userAPI.searchUsersByFavoriteColor("Pink")
      expect(actual).toThrow(ReferenceError)
    })
  })
})
