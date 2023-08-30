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

  deleteUserById(id: string) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      const deletedUser = this.users[index];
      this.users.splice(index, 1);
      try {
        this.fileSystemService.deleteUserDataFile(id);
      } catch (error) {
        console.error(error);
      }
      return deletedUser;
    }
  }

  updateUserById(id: string, user: User) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      const updatedUser = {
        ...this.users[index],
        ...user,
      };
      this.users[index] = updatedUser;
      try {
        this.fileSystemService.updateUserDataFile(id, updatedUser);
      } catch (error) {
        console.error(error);
      }
      return updatedUser;
    }
  }

  // searchUsersByName(name: string) {
  //   const regex = new RegExp(`${name}`, "i");
  //   const foundUsers = [];
  //   for (const key in this.users) {
  //     if (regex.test(this.users[key].name)) {
  //       foundUsers.push(this.users[key]);
  //     }
  //   }
  //   return foundUsers;
  // }

  // searchUsersByFavColor(color: string) {
  //   const regex = new RegExp(`${color}`, "i");
  //   const foundUsers = [];
  //   for (const key in this.users) {
  //     if (regex.test(this.users[key].favColor)) {
  //       foundUsers.push(this.users[key]);
  //     }
  //   }
  //   return foundUsers;
  // }

  private generateUid(): string {
    return Date.now().toString();
  }
}
