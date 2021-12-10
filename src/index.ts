interface User {
  id?: number,
  name: string,
  age: number,
  color: string
}

type ID = number;

class UserApi {
  users = new Map<ID, User>();
  
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

  }

  deleteUser(id: ID): User {

  }

  updateUser(id: ID): User {

  }
};

