type User = {
  name: string,
  age: number,
  favColor: string,
}

export type IDAwareUser = User & {
  readonly id: string
}

export class UserAPI {
  private users: Record<string, IDAwareUser> = {};

  private getUId(): string {
    const id = (Math.floor(Math.random() * 900)).toString();
    if (this.users[id]) {
      return this.getUId();
    } else {
      return id;
    }
  }

  private assignUniqueId(user: User): IDAwareUser {
    const newId = this.getUId();
    return {
      ...user,
      id: newId
    }
  }

  constructor(initial_users: Record<string, IDAwareUser> = {}) {
    this.users = initial_users;
  }

  getAllUsers(): ReadonlyArray<User> {
    const user_array = Object.values(this.users);
    return user_array;
  }

  addUser(userObj: User): IDAwareUser {
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

  deleteUserById(id: string): IDAwareUser {
    const newUserArr = { ...this.users };
    const deletedUser = this.users[id]
    delete newUserArr[id];
    this.users = newUserArr;
    return deletedUser;
  }
}
