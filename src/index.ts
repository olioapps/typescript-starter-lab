export interface User {
  readonly name: string,
  readonly age: number,
  readonly favColor: string,
  readonly id: string,
}

export class UserAPI {
  users: ReadonlyMap<string, User>;
  constructor(users: User[] = []) {
    this.users = new Map(users.map(user => [user.id, user]))
  }

  getAllUsers() {
    return [...this.users.values()];
  }
}

