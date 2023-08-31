import { User, UserAPI } from "../Services/userAPIService";
import { fileSystemService } from "../Services/fileSystemService";

const userAPIService = new UserAPI(fileSystemService);

export class UserProvider {
  static async getAllUsers() {
    try {
      const users = await userAPIService.getAllUsers();
      return { message: "All Users", users };
    } catch (err) {
      throw err;
    }
  }

  static async getUserById(id: string) {
    try {
      const user = await userAPIService.getUserById(id);
      return { message: "User Found", user };
    } catch (err) {
      throw err;
    }
  }

  static async addUser(user: User) {
    try {
      if (!user.name) {
        throw new Error("Name is required");
      }
      const createdUser = await userAPIService.addUser(user);
      return { message: "User Created", user: createdUser };
    } catch (err) {
      throw err;
    }
  }

  static async deleteUserById(id: string) {
    try {
      const deletedUser = await userAPIService.deleteUserById(id);
      return { message: "User Deleted", user: deletedUser };
    } catch (err) {
      throw err;
    }
  }

  static async updateUserById(id: string, updatedUser: User) {
    try {
      const user = await userAPIService.updateUserById(id, updatedUser);
      return { message: "User Updated", user };
    } catch (err) {
      throw err;
    }
  }

  // static async getUserByName(name: string) {
  //   try {
  //     const user = await userAPIService.getUserByName(name);
  //     return { message: "User Found", user };
  //   } catch (err) {
  //     throw err;
  //   }
  // }

  // static async getUserByFavColor(favColor: string) {
  //   try {
  //     const user = await userAPIService.getUserByFavColor(favColor);
  //     return { message: "User Found", user };
  //   } catch (err) {
  //     throw err;
  //   }
  // }
}
