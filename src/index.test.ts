import { 
  UserAPI,
  User,
 } from ".";

describe("UserAPI constructor", () => {
  it("should instantiate an instance of UserAPI without user repository", () => {
    const newUserApi = new UserAPI();
    const expected = 0;
    const actual = newUserApi.users.size;
    expect(actual).toEqual(expected);
  });

  it('should instantiate an instance of UserApi with a user repository', () => {
    const userRepo: User[] = [
      {
        name: 'Pi',
        age: 15,
        favColor: 'grey',
        id: '342',
      },
      {
        name: 'Buckets',
        age: 2,
        favColor: 'pink',
        id: '465',
      },
      {
        name: 'Opal',
        age: 4,
        favColor: 'teal',
        id: "721"
      }
    ]
    const newUserApi = new UserAPI(userRepo);
    const expected = userRepo.length;
    const actual = newUserApi.users.size
    expect(actual).toEqual(expected)
  });
});

describe('UserAPI.getAllUsers', () => {
  it('should return an array of all users in the repository', () => {
    const userRepo: User[] = [
      {
        name: 'Pi',
        age: 15,
        favColor: 'grey',
        id: '342',
      },
      {
        name: 'Buckets',
        age: 2,
        favColor: 'pink',
        id: '465',
      },
      {
        name: 'Opal',
        age: 4,
        favColor: 'teal',
        id: "721"
      }
    ];
    const newUserApi = new UserAPI(userRepo);
    const expected = userRepo;
    const actual = newUserApi.getAllUsers();
    expect(actual).toEqual(expected);
  })
})
