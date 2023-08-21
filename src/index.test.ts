import { UserAPI } from './index'
import { users as user_repository } from './test_data';

describe('UserAPI', () => {
  it('should create a new instance of UserAPI without taking any parameters', () => {
    const expected = {
      users: {}
    }

    const actual = new UserAPI;

    expect(actual).toEqual(expected);
  });

  it('should create a new instance of UserAPI and take a parameter of a user repository', () => {
    const expected = {
      users: {
        "243": {
          name: "Scorpo Fangoria",
          age: 16,
          favColor: "puce",
          id: 243
        },
        "564": {
          name: "Cadder Jenks",
          age: 67,
          favColor: "Barbie",
          id: 564
        }
      }
    }

    const actual = new UserAPI(user_repository)

    expect(actual).toEqual(expected);
  })
})

describe('getAllUsers', () => {
  it('should return the map of users', () => {

    const userAPI = new UserAPI(user_repository);
    const expected = {
      "243": {
        name: "Scorpo Fangoria",
        age: 16,
        favColor: "puce",
        id: 243
      },
      "564": {
        name: "Cadder Jenks",
        age: 67,
        favColor: "Barbie",
        id: 564
      }
    }

    const actual = userAPI.getAllUsers();

    expect(actual).toEqual(expected);
  })
})
