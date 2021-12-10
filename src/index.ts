interface User {
  id?: number,
  name: string,
  age: number,
  favoriteColor: string
}

type ID = number;

class UserApi {
  users = new Map<ID, User>();
  private static count = 0;

  static generateId(): ID {
    UserApi.count++;
    return UserApi.count;
  }
  
  getUser(id: ID): User | null {
    if(!id) throw new Error("Missing user ID.");
    return this.users.get(id) || null
  }

  getUsers(): User[] {
    const result: User[] = [];
    for(let [id, user] of this.users) {
      result.push(user);
    }
    return result;
  }

  createUser(newUser: User): User {
    if(newUser.id && this.users.get(newUser.id)) {
      throw new Error("User already exists.");
    }
    const id = UserApi.generateId(); 
    this.users.set(id, { id, ...newUser})
    return this.users.get(id) as User;
  }

  deleteUser(id: ID): Boolean {
    if(!id) throw new Error("Missing User ID")
    return this.users.delete(id);
  }

  updateUser(newData: User): User {
    if(!newData.id) throw new Error('Missing User ID.');
    const existingUser = this.users.get(newData.id)
    if(!existingUser) throw new Error('User not found.');

    //as PATCH:
    // const updatedUser = { ...existingUser, ...newData }

    //as PUT:
    this.users.set(newData.id, newData)
    return this.users.get(newData.id) as User;
  }
};

console.log('Initializing UserApi.');
const users = new UserApi();
console.log('initialized Users map: ', users.getUsers());
console.log('Creating a couple users...')
const user1 = users.createUser({ name: 'Ian', age: 31, favoriteColor: 'red' });
console.log('Created user: ', user1);
const user2 = users.createUser({ name: 'Evan', age: 29, favoriteColor: 'green' });
console.log('Created user: ', user2);
const user3 = users.createUser({ name: 'Sarah', age: 29, favoriteColor: 'blue' });
console.log('Created user: ', user3);
console.log('Fetching all users...');
console.log(users.getUsers());
console.log('Fetching a user...')
console.log(users.getUser(user1.id));
console.log('Updating a user...');
users.updateUser({ ...user1, favoriteColor: 'orange'});
console.log('Updated user: ', users.getUser(user1.id));
console.log('Deleting a user...');
users.deleteUser(user1.id);
console.log('Users after deleting: ', users.getUsers());
console.log('Attempting to get a deleted user...');
console.log(users.getUser(user1.id));
try {
  console.log('Attempting to fetch a user without supplying an ID...');
  users.getUser();
} catch(err) { console.log(err.message) }
try {
  console.log('Attempting to create a user that already exists')
  users.createUser(user2);
} catch(err) { console.log(err.message) }
try {
  ('Attempting to delete a user without supplying an ID...');
  users.deleteUser();
} catch(err) { console.log(err.message) }
try {
  console.log('Attempting to update a user without supplying an ID...');
  const fakeUser = { ...user3 };
  delete fakeUser.id;
  users.updateUser(fakeUser)
} catch(err) { console.log(err.message) }
try {
  console.log('Attempting to update a user that does not exist...')
  users.updateUser({ ...user2, id: 99 });
} catch(err) { console.log(err.message) }
console.log('Done.');