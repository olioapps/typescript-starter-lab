export interface User {
  readonly name: string,
  readonly age: number,
  readonly favColor: string,
  readonly id?: string,
}

export class UserAPI {
  private users: Record<string, User>;
  private currentId: number = 0
  constructor(users: Record<string, User> = {}) {
    this.users = users
  }

  getAllUsers() {
    return [...Object.values(this.users)];
  }

  addUser(user: User) {
    const newId = this.assignId();
    this.users[newId] = {
      ...user,
      id: newId.toString(),
    }
  }

  getUserById(id: string) {
    return this.getAllUsers().filter(user => user.id == id)[0]
  }

  assignId() {
    this.currentId +=1;
    return this.currentId;
  }
}

// Complete full CRUD functionality on UserAPI class.

// Context:
// The UserAPI object will manage its own collection of 'User' items. UserAPI can be instantiated with a single, optional argument, which is an initial User repository. UserAPI will contain expected CRUD methods, as well as some additional getter methods. These further methods include a getUserById, addUser, and deleteUserById.

// Acceptance Criteria:

// UserAPI has (almost) full CRUD functionality (Create - addUser, Read - getAllUsers, getUserById, Update, and Delete - deleteUserById)
// UserAPI has three new methods: getUserById, addUser, and deleteUserById
// UserAPI.getUserById takes an id string and returns a single User object.
// UserAPI.addUser takes an uninitialized user object and creates a unique id, and adds the user to the repo with this id as its key.
// UserAPI.deleteUserById takes an id string and removes the user object
// All new methods have passing tests