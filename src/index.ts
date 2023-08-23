type User =  {
  name: string, 
  age: number,
  favColor: string,
}

type IUser = {
  name: string, 
  age: number,
  favColor: string,
  readonly id: string
}

export class UserAPI {
  private users: Record<string, IUser> = {};

  private getUId() {
    return (Math.floor(Math.random() * 900)).toString();
  }

  private assignUniqueId(user: User): IUser {
    const newId = this.getUId();
    if(this.users[newId]) {
      return this.assignUniqueId(user);
    }
    return {
      ...user,
      id: newId
    }
  }

  constructor(initial_users: Record<string, IUser> = {}) {
    this.users = initial_users;
  }

  getAllUsers(): ReadonlyArray<User> {
    const user_array = Object.values(this.users);
    return user_array;
  }

  addUser(userObj: User): void {
    const newUserArr = {...this.users}
    const id_user = this.assignUniqueId(userObj);
    newUserArr[id_user.id] = id_user;
  }

  getUserById(id: string): User {
    return (
      this.users[id]
    )
  }

  deleteUserById(id: string): void {
    const newUserArr = {...this.users};
    delete newUserArr[id];
  }
}
