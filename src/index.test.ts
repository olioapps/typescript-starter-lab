import { User, UserAPI } from './index'

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
