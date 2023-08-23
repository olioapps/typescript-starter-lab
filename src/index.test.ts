import { UserAPI } from './index'
import { users as user_repository, new_user } from './test_data';

describe('UserAPI', () => {
  it('should create a new instance of UserAPI without taking any parameters', () => {
    const actual = new UserAPI();

    expect(actual).toBeInstanceOf(UserAPI);
  });

  it('should create a new instance of UserAPI and take a parameter of a user repository', () => {
    const expected = {
      users: {
        "243": {
          name: "Scorpo Fangoria",
          age: 16,
          favColor: "puce",
          id: "243"
        },
        "564": {
          name: "Cadder Jenks",
          age: 67,
          favColor: "Barbie",
          id: "564"
        }
      }
    }

    const actual = new UserAPI(user_repository)

    expect(actual).toEqual(expected);
  })
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

    const actual = userApi.addUser(new_user)
    const expected = (Object.keys(actual)[0])

    expect(actual[Object.keys(actual)[0]].id).toEqual(expected);
  })

  it('should add the new user, with unique id, to the users object', () => {
    const userApi = new UserAPI(user_repository);
    const actual = userApi.addUser(new_user);
    
    expect(actual).toBeTruthy;
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
    const expected = null;

    const actual = userAPI.deleteUserById(id);

    expect(actual).toEqual(expected);
  })

  it('should return null if the user at the inputted id does not exist', () => {
    const userAPI = new UserAPI(user_repository);
    const id = "123";
    const expected = null;

    const actual = userAPI.deleteUserById(id);

    expect(actual).toEqual(expected);
  })

})
