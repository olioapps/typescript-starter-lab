type User = {
  name: string,
  age: number,
  favColor: string,
}

export type IUser = User & {
  readonly id: string
}

export class UserAPI {
  private users: Record<string, IUser> = {};

  private getUId(): string {
    const id = (Math.floor(Math.random() * 900)).toString();
    if (this.users[id]) {
      return this.getUId();
    } else {
      return id;
    }
  }

  private assignUniqueId(user: User): IUser {
    const newId = this.getUId();
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

  addUser(userObj: User): IUser {
    const newUserArr = { ...this.users }
    const id_user = this.assignUniqueId(userObj);
    newUserArr[id_user.id] = id_user;
    this.users = newUserArr;
    return id_user;
  }

  getUserById(id: string): User {
    return (
      this.users[id]
    )
  }

  deleteUserById(id: string): IUser {
    const newUserArr = { ...this.users };
    delete newUserArr[id];
    this.users = newUserArr;
    return newUserArr[id];
  }
}
