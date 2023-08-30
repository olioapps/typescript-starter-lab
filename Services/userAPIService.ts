//  Update the getUser method to use the FileSystemService's readFile function for retrieving user data by ID.
// Update the createUser method to use the FileSystemService's writeFile function for adding new user data.
// Update the updateUser method to use the FileSystemService's updateFile function for modifying user data.
// Update the deleteUser method to use the FileSystemService's deleteFile function for removing user data files.
// Ensure that the UserAPIService methods remain modular and error handling is appropriately managed.
// Verify that the methods return the expected results after integrating with the FileSystemService.

export type User = {
  name: string;
  age: number;
  favColor: string;
};

export interface IdAwareUser extends User {
  readonly id: string;
}

interface FileSystemService {
  readAllUserDataFiles(): Promise<Record<string, User>>;
  readUserDataFile(userId: string): Promise<User>;
  writeUserDataFile(user: IdAwareUser): Promise<IdAwareUser>;
  updateUserDataFile(userId: string, updatedUserData: any): Promise<User>;
  deleteUserDataFile(userId: string): Promise<string>;
}

export class UserAPI {
  // constructor should now take the fileSystemService as a parameter
  private fileSystemService: FileSystemService;
  private users: IdAwareUser[];
  constructor(fileSystemService: FileSystemService) {
    this.fileSystemService = fileSystemService;
    this.users = [];
    this.initialize();
  }

  private async initialize() {
    try {
      const users = await this.fileSystemService.readAllUserDataFiles();
      this.users = Object.entries(users).map(([id, user]) => ({
        ...user,
        id,
      }));
    } catch (error) {
      console.error(error);
    }
  }

  getAllUsers(): ReadonlyArray<IdAwareUser> {
    return [...this.users];
  }

  async addUser(user: User) {
    const newId = this.generateUid();
    const newUser = {
      ...user,
      id: newId,
    };
    this.users.push(newUser);
    try {
      await this.fileSystemService.writeUserDataFile(newUser);
      return newUser;
    } catch (error) {
      console.error(error);
    }
  }

  getUserById(id: string): IdAwareUser {
    if (!this.users[id]) {
      throw new Error("User not found");
    } else {
      return { ...this.users[id] };
    }
  }

  deleteUserById(id: string): IdAwareUser {
    if (!this.users[id]) {
      throw new Error("User not found");
    } else {
      const { [id]: userToBeDeleted, ...rest } = this.users;
      this.users = rest;
      return userToBeDeleted;
    }
  }

  updateUserById(id: string, user: User) {
    if (!this.users[id]) {
      throw new Error("User not found");
    } else {
      this.users[id] = {
        ...user,
        id: id,
      };
      return { ...this.users[id] };
    }
  }

  searchUsersByName(name: string) {
    const regex = new RegExp(`${name}`, "i");
    const foundUsers = [];
    for (const key in this.users) {
      if (regex.test(this.users[key].name)) {
        foundUsers.push(this.users[key]);
      }
    }
    return foundUsers;
  }

  searchUsersByFavColor(color: string) {
    const regex = new RegExp(`${color}`, "i");
    const foundUsers = [];
    for (const key in this.users) {
      if (regex.test(this.users[key].favColor)) {
        foundUsers.push(this.users[key]);
      }
    }
    return foundUsers;
  }

  private generateUid(): string {
    return Date.now().toString();
  }
}
