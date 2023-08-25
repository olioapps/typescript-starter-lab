type User = {
  name: string;
  age: number;
  favColor: string;
}

interface IdAwareUser extends User {
  readonly id: string
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
      id: newId
    }
    this.users[newId] = {
      ...newUser
    };
    return newUser;
  }

  getUserById(id: string): IdAwareUser {
    if (!this.users[id]) {
      throw new Error('User not found')
    } else {
      return {...this.users[id]};
    }
  }

  deleteUserById(id: string): IdAwareUser {
    if (!this.users[id]) {
      throw new Error("User not found")
    } else {
      const { [id]: userToBeDeleted, ...rest } = this.users
      this.users = rest;
      return userToBeDeleted;
    }
  }

  private generateUid(): string {
    return Date.now().toString();
  }
}
