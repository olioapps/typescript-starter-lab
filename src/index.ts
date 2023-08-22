export interface User {
  name: string,
  age: number,
  favColor: string,
  id: string,
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
