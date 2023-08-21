import { UserAPI } from ".";

describe("UserAPI.users", () => {
  it("should instantiate an instance of UserAPI without user repository", () => {
    const newUserApi = new UserAPI();
    const expected = {};
    const actual = newUserApi.users;
    expect(actual).toEqual(expected);
  });

  it('should instantiate an instance of UserApi with a user repository', () => {
    const userRepo = {
      342: {
        name: 'Pi Gerigscott',
        age: 15,
        favColor: 'grey',
        id: '342',
      },
      465: {
        name: 'Buckets',
        age: 2,
        favColor: 'pink',
        id: '465',
      },
      721: {
        name: 'Opal',
        age: 4,
        favColor: 'teal',
        id: "721"
      }
    }
    const newUserApi = new UserAPI(userRepo);
    const expected = userRepo;
    const actual = newUserApi.users
    expect(actual).toEqual(expected)
  })
});
