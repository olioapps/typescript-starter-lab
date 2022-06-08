import { UserAPI } from './index'

describe(UserAPI, () => {
  const x = new UserAPI()

  const user = {
    name: "andy",
    favColor: "blue",
    age: 247
  }
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
    id: 5,
    name: "andy",
    favColor: "blue",
    age: 200
  }

  test('check that UserAPI is initialized', () => {
    expect(x).toBeInstanceOf(UserAPI)
  })
  test("check that the initial state of the user list is empty", () => {
    expect(x.get_Users()).toEqual([])
  })

  test("check that a user is added correctly")


})