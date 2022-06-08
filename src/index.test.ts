import { UserAPI } from './index'

const seedUsers = [{ 
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
const userDuplicate = {
  name: "andy",
  favColor: "blue",
  age: 247
}
const userWithId = {
  id: "5",
  name: "andy",
  favColor: "blue",
  age: 200
}

describe('Initilizing UserAPI, getUsers() *single user*, addUser()', () => {

  const x = new UserAPI(seedUsers)

  test('check that UserAPI is initialized', () => {
    expect(x).toBeInstanceOf(UserAPI)
  })
  test("check that getUsers() returns intitial seed data", () => {
    expect(x.getUsers()).toEqual([{ id: "1", name: "andy", favColor: "blue", age: 247 }])
  })

  test("check that addUser() correct adds a user with a random id", () => {
    const newUser = x.addUser(user2)
    expect(x.getUsers()).toEqual([{ id: "1", name: "andy", favColor: "blue", age: 247 }, newUser])
  })

  test("check that addUser() throws error when duplicating user info", () => {
    expect( () => {x.addUser(userDuplicate)}).toThrow(Error)
  })

  test("check that addUser() throws error supplied with pre-existing user.id", () => {
    expect( () => {x.addUser(userWithId)}).toThrow(Error)
  })

})

describe('getUserId(), getUsers() *multiple users*, deleteUserById()', () => {
  const x = new UserAPI()
  x.addUser(user2)
  x.addUser(user3)


})

describe('', () => {

})