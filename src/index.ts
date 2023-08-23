export interface User {
  name: string;
  age: number;
  favColor: string;
  id?: string;
}

export class UserAPI {
  private users: Record<string, User>;
  constructor(users: Record<string, User> = {}) {
    this.users = { ...users };
  }

  getAllUsers() {
    return [...Object.values(this.users)];
  }

  addUser(user: User) {
    const newId = this.generateUid();
    this.users[newId] = {
      ...user,
      id: newId,
    };
  }

  getUserById(id: string) {
    return this.users[id];
  }

  deleteUserAtId(id: string) {
    const updatedUsers = { ...this.users };
    const toBeDeletedUser = { ...updatedUsers[id] };
    delete updatedUsers[id];
    this.users = updatedUsers;
    return { ...toBeDeletedUser };
  }

  private generateUid() {
    return Date.now().toString();
  }
}
