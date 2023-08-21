import { UserAPI } from ".";

describe("UserAPI.users", () => {
  it("should instantiate an instance of UserAPI without user repository", () => {
    // ARRANGE
    const newUserApi = new UserAPI();
    const expected = {};
    // ACT
    const actual = newUserApi.users;
    // ASSERT
    expect(actual).toEqual(expected);
  });

  // it('should instantiate an instance of UserApi with a user repository', () => {
  //   // ARRANGE
  //   const userRepo = {
      
  //   }
  //   const newUserApi = new UserAPI();
  // })
});
