export interface User {
  name: string,
  age: number,
  favColor: string,
  readonly id: string,
}

export class UserAPI {
  private users: Record<string, User>;
  constructor(users: Record<string, User> = {}) {
    this.users = users
  }

  getAllUsers() {
    return [...Object.values(this.users)];
  }
}
