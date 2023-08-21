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

  getAllUsers(): Record<string, User> {
    return this.users;
  }
}