import { UserAPI } from './index'
import { users as user_repository, new_user } from './test_data';

describe('UserAPI', () => {
  it('should create a new instance of UserAPI without taking any parameters', () => {
    const actual = new UserAPI();

    expect(actual).toBeInstanceOf(UserAPI);
  });
})

describe('getAllUsers', () => {
  it('should return the array of users', () => {

    const userAPI = new UserAPI(user_repository);
    const expected = [
      { 
        name: "Scorpo Fangoria",
        age: 16,
        favColor: "puce",
        id: "243"
      },
      {
        name: "Cadder Jenks",
        age: 67,
        favColor: "Barbie",
        id: "564"
      }
    ]

    const actual = userAPI.getAllUsers();

    expect(actual).toEqual(expected);
})
})

describe('addUser', () => {
  it('should create a unique id for an inputted user object and assign the id to the key of the user object in the users map', () => {
    const userApi = new UserAPI();

    const actual =  userApi.addUser(new_user);

    expect(actual.name).toEqual(new_user.name);
  })

  it('should return the added user if it is added successfully', () => {
    const userApi = new UserAPI();

    const actual = userApi.addUser(new_user);

    expect(actual.id).toBeTruthy;
  })
})

describe('getUserById', () => {
  it('should take an id as a parameter and return a single object', () => {
    const userApi = new UserAPI(user_repository);
    const id = "564"
    const expected = {
      name: "Cadder Jenks",
      age: 67,
      favColor: "Barbie",
      id: "564"
    }

    const actual = userApi.getUserById(id);

    expect(actual).toEqual(expected);
  })
})

describe('deleteUserById', () => {
  it('should remove the user at the inputted id from the users object', () => {
    const userAPI = new UserAPI(user_repository);
    const id = "564";
    const expected = userAPI.getAllUsers().length -1;

    userAPI.deleteUserById(id);
    const actual = userAPI.getAllUsers().length;

    expect(actual).toEqual(expected);
  });
})
