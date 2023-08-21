export class User {
  constructor(
    public name: string, 
    public age: number,
    public favColor: string,
    private id: number
  ){}
}

export class UserAPI {
  public users: User[] = [];

  constructor(initialUsers?: User[]) {
    if(initialUsers) {
      this.users = initialUsers;
    }
  }