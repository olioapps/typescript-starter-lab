type User = {
  name: string;
  age: number;
  favColor: string;
};

interface IdAwareUser extends User {
  readonly id: string;
}

export class UserAPI {
  private users: Record<string, IdAwareUser>;
  constructor(users: Record<string, IdAwareUser> = {}) {
    this.users = { ...users };
  }

  getAllUsers(): ReadonlyArray<IdAwareUser> {
    return [...Object.values(this.users)];
  }

  addUser(user: User): IdAwareUser {
    const newId = this.generateUid();
    const newUser = {
      ...user,
      id: newId,
    };
    this.users[newId] = {
      ...newUser,
    };
    return newUser;
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
    const regex = new RegExp(`${name}`, "gi");
    const userKeys = Object.keys(this.users)
    return userKeys.filter(id => regex.test(this.users[id].name))
  }

  private generateUid(): string {
    return Date.now().toString();
  }
}
