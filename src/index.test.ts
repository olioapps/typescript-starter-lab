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
    const expected = userApi.getAllUsers().length + 1;
    userApi.addUser(new_user);

    const actual = userApi.getAllUsers().length;

    expect(actual).toEqual(expected);
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

  it('should throw an error message if user at inputted id does not exist', () => {
    const userAPI = new UserAPI(user_repository);
    const id = "123";
    
    const actual = () => userAPI.getUserById(id);

    expect(actual).toThrow("User does not exist");
  })
})

describe('deleteUserById', () => {
  it('should remove the user at the inputted id from the users object', () => {
    const userAPI = new UserAPI(user_repository);
    const id = "564";
    const expected = userAPI.getAllUsers().length - 1;

    userAPI.deleteUserById(id);
    const actual = userAPI.getAllUsers().length;

    expect(actual).toEqual(expected);
  });

  it('should return a message stating that the user was successfully deleted', () => {
    const userAPI = new UserAPI(user_repository);
    const id = "564";
    const expected = "User successfully deleted";

    const actual = userAPI.deleteUserById(id);

    expect(actual).toEqual(expected);
  })

  it('should throw an error if the user at the inputted id does not exist', () => {
    const userAPI = new UserAPI(user_repository);
    const id = "998";

    const actual = () => userAPI.deleteUserById(id);
    console.log(actual)

    expect(actual).toThrow("This user does not exist");
  })
})
