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

  addUser(user: User): void {
    const newId = this.generateUid();
    this.users[newId] = {
      ...user,
      id: newId,
    };
  }

  getUserById(id: string): IdAwareUser {
    return {...this.users[id]};
  }

  deleteUserAtId(id: string): IdAwareUser {
    const updatedUsers = { ...this.users };
    const toBeDeletedUser = { ...updatedUsers[id] };
    delete updatedUsers[id];
    this.users = updatedUsers;
    return { ...toBeDeletedUser };
  }

  private generateUid(): string {
    return Date.now().toString();
  }
}
