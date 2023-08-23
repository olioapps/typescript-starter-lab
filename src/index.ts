type User =  {
  name: string, 
  age: number,
  favColor: string,
  readonly id?: string
}

export class UserAPI {
  private users: Record<string, User> = {};

  constructor(initial_users: Record<string, User> = {}) {
    this.users = initial_users;
  }

  getAllUsers(): ReadonlyArray<User> {
    const user_array = Object.values(this.users);
    return user_array;
  }

  addUser(userObj: User) {
    const newUserId = (Math.floor(Math.random() * 900)).toString();
    // const newUserId = v4();
    const new_user = {
      ...userObj,
      id: newUserId
    }
    return {
      ...this.users,
      [newUserId]: new_user
    }
  }

  getUserById(id: string) {
    return (
      this.users[id]
    )
  }

  deleteUserById(id: string) {
    delete this.users[id];
    if(this.users[id]) {
      return this.users[id]
    } else {
      return null
    }
  }
}