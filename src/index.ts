export interface User {
  name: string;
  age: number;
  favColor: string;
  id?: string;
}

export class UserAPI {
  private users: Record<string, User>;
  private currentId: number = 0;
  constructor(users: Record<string, User> = {}) {
    this.users = { ...users };
  }

  getAllUsers() {
    return [...Object.values(this.users)];
  }

  addUser(user: User) {
    const newId = this.assignId();
    this.users[newId] = {
      ...user,
      id: newId.toString(),
    };
  }

  getUserById(id: string) {
    return this.getAllUsers().filter((user) => user.id == id)[0];
  }

  deleteUserAtId(id: string) {
    delete this.users[id];
  }

  assignId() {
    this.currentId += 1;
    return this.currentId;
  }
}
