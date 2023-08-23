type User =  {
  name: string, 
  age: number,
  favColor: string,
  id: number
}

export class UserAPI {
  private users: Record<string, User> = {};

  constructor(initial_users: Record<string, User> = {}) {
    this.users = initial_users;
  }

  getAllUsers(): ReadonlyArray<User> {
    const users_array = Object.values(this.users);
    return users_array;
  }
}
