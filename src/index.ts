import { getHeader } from "openai/core";

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
    const id_user = this.assignUniqueId(userObj);
      this.users[id_user.id] = id_user;
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