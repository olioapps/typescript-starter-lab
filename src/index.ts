interface User {
  id?: number,
  name: string,
  age: number,
  color: string
}

type ID = number;

class UserApi {
  users = new Map<ID, User>();
  private static count = 0;

  static generateId(): ID {
    UserApi.count++;
    return UserApi.count;
  }
  
  getUser(id: ID): User | undefined {
    return this.users.get(id)
  }

  getUsers(): User[] {
    const result: User[] = [];
    for(let [id, user] of this.users) {
      result.push(user);
    }
    return result;
  }

  createUser(obj: User): User {
    const id = UserApi.generateId();
    this.users.set(id, { id, ...obj})
    return this.users.get(id) as User;
  }

  deleteUser(id: ID): Boolean {
    return this.users.delete(id);
  }

  updateUser(id: ID): User {

  }
};