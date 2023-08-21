export interface User {
  readonly name: string,
  readonly age: number,
  readonly favColor: string,
  readonly id: string,
}

export class UserAPI {
  users: Record<string, User>;
  constructor(users: Record<string, User> = {}) {
    this.users = users
  }

  getAllUsers() {
    return [...Object.values(this.users)];
  }
}

// test the objects methods, make sure the data is private
// mock data file