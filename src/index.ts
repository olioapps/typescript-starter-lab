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

  private doesUserNameExist(users: IUser[], name: string): boolean {
    return users.some(user => user.name === name)
  }

  constructor(initial_users: Record<string, IUser> = {}) {
    this.users = initial_users;
  }

  getAllUsers(): ReadonlyArray<User> {
    const user_array = Object.values(this.users);
    return user_array;
  }

  addUser(userObj: User): IUser {
    const { name } = userObj;
    console.log(name)
    const existing_users = Object.values(this.users);
    const duplicate = this.doesUserNameExist(existing_users, name);
    console.log(duplicate);
    if(duplicate) {
      throw new Error("A user with this name already exists");
    } else {
      const newUserArr = { ...this.users }
      const id_user = this.assignUniqueId(userObj);
      newUserArr[id_user.id] = id_user;
      this.users = newUserArr;
      return id_user;
    }
  }

  getUserById(id: string): User {
    if (!this.users[id]) {
      throw new Error("User does not exist");
    } else {
      return (
        this.users[id]
      )
    }
  }

  deleteUserById(id: string): IUser {
    if (!this.users[id]) {
      throw new Error("This user does not exist")
    } else {
      const newUserArr = { ...this.users };
      delete newUserArr[id];
      this.users = newUserArr;
      return newUserArr[id];
    }
  }
}
