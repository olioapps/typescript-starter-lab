import { User, UserAPI } from './index'

describe('User', () => {
  it('should return a new user', () => {
    const name = "Scorpo Fangoria";
    const age = 16;
    const favColor = "puce";
    const id = 1;
    const expected = {
      name: "Scorpo Fangoria",
      age: 16,
      favColor: "puce",
      id: 1
    }

    const actual = new User(name, age, favColor, id);

    expect(actual).toEqual(expected);
  })
})

describe('UserAPI', () => {
  it('should create a new instance of UserAPI without taking any parameters', () => {
    const expected = {
      users: []
    }

    const actual = new UserAPI;

    expect(actual).toEqual(expected);
  });

  it('should create a new instance of UserAPI and take a parameter of a user repository', () => {
    const user1 = new User("Scorpo Fangoria", 16, "puce", 1);
    const user2 = new User("Cadder Jenks", 67, "Barbie", 2);
    const user_repository = [user1, user2];
    const expected = {
      users: [
        {
          name: "Scorpo Fangoria",
          age: 16,
          favColor: "puce",
          id: 1
        },
        {
          name: "Cadder Jenks",
          age: 67,
          favColor: "Barbie",
          id: 2
        }
      ]
    }

    const actual = new UserAPI(user_repository)

    expect(actual).toEqual(expected);
  })
})

describe('getAllUsers', () => {
  it('should return the array of users', () => {
    const user1 = new User("Scorpo Fangoria", 16, "puce", 1);
    const user2 = new User("Cadder Jenks", 67, "Barbie", 2);
    const user_repository = [user1, user2];
    const userAPI = new UserAPI(user_repository);
    const expected = [
      {
        name: "Scorpo Fangoria",
        age: 16,
        favColor: "puce",
        id: 1
      },
      {
        name: "Cadder Jenks",
        age: 67,
        favColor: "Barbie",
        id: 2
      }
    ]

    const actual = userAPI.getAllUsers();

    expect(actual).toEqual(expected);
  })
})
