import { UserAPI, IUser } from './index'
const seedUsers: Array<IUser> = [
  { id: "1", name: "andy", favColor: "blue", age: 247 },
  { id: "2", name: "Andy",  favColor: "purple", age: 150 },
  { id: "3", name: "Sarah", favColor: "Blue", age: 200} 
]
const userAPI = new UserAPI(seedUsers)


describe(UserAPI, () => {
  it('check that UserAPI is initialized', () => {
    expect(userAPI).toBeInstanceOf(UserAPI)
  })

  describe('getUser()', () => {
    it("getUsers() returns intitial seed data", () => {
      const actual = userAPI.getUsers()
      const expected = [...seedUsers]
      expect(actual).toEqual(expected)
    })
  })
  
  describe('addUser()', () => {
    it('addUser() adds new user to the dataset', () => {
      const user = { name: "Sarah", favColor: "Blue", age: 150 } 
      const newUser = userAPI.addUser(user)

      const actual = userAPI.getUsers()
      const expected = [...seedUsers, newUser]
      expect(actual).toEqual(expected)
    })
    it("addUser() throws error when duplicating user info", () => {
      const userDuplicate = { name: "andy", favColor: "blue", age: 247 }

      const actual = () => {userAPI.addUser(userDuplicate)}
      expect(actual).toThrow(Error)
    })
    it("addUser() throws error supplied with pre-existing user.id", () => {
      const userWithId = seedUsers[0]

      const actual = () => {userAPI.addUser(userWithId)}
      expect(actual).toThrow(Error)
    })
  })
  describe('getUserById()', () => {
    it('getUserById() returns expected user', () => {
      const actual = userAPI.getUserById("2")
      const expected = seedUsers[1]
      expect(actual).toEqual(expected)
    })
  
    it('getUserById() throws error if user with id is not found', () => {
      const actual = () => userAPI.getUserById("100")
      expect(actual).toThrow(ReferenceError)
    })
  })
  describe('deleteUserById()', () => {
    it('deleteUserById() deletes user with given id', () => {
      const userAPI = new UserAPI(seedUsers)
      userAPI.deleteUserById("1")
      const actual = userAPI.getUsers()
      const expected = [
        { id: "2", name: "Andy",  favColor: "purple", age: 150 },
        { id: "3", name: "Sarah", favColor: "Blue", age: 200}
      ]
      expect(actual).toEqual(expected)
    })
    it('deleteUserById() throws error if user is not found', () => {
      const actual =  () => {userAPI.deleteUserById("100")}
      expect(actual).toThrow(ReferenceError)
    })
  })
  describe('searchUserbyName()', () => {
    it('searchUserByName() returns all instances of given name, independant of capitals', () => {
      const actual = userAPI.searchUserByName("Andy")
      const expected: Array<IUser> = [
        { id: "1", name: "andy", favColor: "blue", age: 247 },
        { id: "2", name: "Andy",  favColor: "purple", age: 150 }
      ]
      expect(actual).toEqual(expected)
    })
    it('searchUserByName() throws error if no user is found', () => {
      const actual =  () => userAPI.searchUserByName("Jessica")
      expect(actual).toThrow(ReferenceError)
    })
  })
  describe('searchUserFavoriteColor()', () => {
    it('searchUserByFavoriteColor() returns all instances users with given fav color, independant of capitals', () => {
      const userAPI = new UserAPI(seedUsers)
      const actual = userAPI.searchUsersByFavoriteColor("blue")
      const expected: Array<IUser> = [
        { id: "1", name: "andy", favColor: "blue", age: 247 },
        { id: "3", name: "Sarah", favColor: "Blue", age: 200} 
      ]
      expect(actual).toEqual(expected)
    })
    it('searchUserByFavoriteColor() throws error if no user is found with given fav color', () => {
      const actual =  () => userAPI.searchUsersByFavoriteColor("Pink")
      expect(actual).toThrow(ReferenceError)
    })
  })
})
