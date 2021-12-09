interface User {
  id?: number,
  name: string,
  age: number,
  color: string
}

type ID = number;

class UserApi {
  users = new Map<ID, User>();
  
  getUser(id: ID): User {

  }

  getUsers(): User[] {

  }

  createUser(obj: User): User {

  }

  deleteUser(id: ID): User {

  }

  updateUser(id: ID): User {

  }
};

