import { UserAPI, FileSystemService } from "../../Services/userAPIService";
import { userRepo, newUser } from "./mockdata";

describe("UserAPI", () => {
  let userApi: UserAPI;
  let fileSystemServiceMock: FileSystemService;

  beforeEach(() => {
    fileSystemServiceMock = {
      readAllUserDataFiles: jest.fn().mockResolvedValue(userRepo),
      readUserDataFile: jest.fn().mockResolvedValue(userRepo["342"]),
      writeUserDataFile: jest.fn().mockResolvedValue(newUser),
      updateUserDataFile: jest.fn().mockResolvedValue(userRepo["342"]),
      deleteUserDataFile: jest.fn().mockResolvedValue("342"),
    };
    userApi = new UserAPI(fileSystemServiceMock);
  });

  it("should return all users", async () => {
    const users = await userApi.getAllUsers();
    expect(users).toEqual(Object.values(userRepo));
  });

  it("should return a user by id", async () => {
    const user = await userApi.getUserById("342");
    expect(user).toEqual(userRepo["342"]);
  });

  it("should add a user", async () => {
    const user = await userApi.addUser(newUser);
    let actual;
    if (user) {
      actual = user.name;
    }
    expect(actual).toEqual(newUser.name);
  });

  it("should update a user", async () => {
    const updateUserData = { name: "Pancake", age: 14, favColor: "blue" };

    const user = await userApi.updateUserById("342", updateUserData);
    expect(user).toEqual({ ...updateUserData, id: "342" });
  });

  it("should delete a user", async () => {
    const userId = "342";
    const expected = await userApi.getUserById(userId);
    const user = await userApi.deleteUserById(userId);
    expect(user).toEqual(expected);
  });
});
