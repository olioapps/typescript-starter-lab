//Define class here

export interface User {
    readonly id?: number
    readonly name: string
    readonly age: number
    readonly color: string
}

export interface ErrorMessage {
    readonly message: string
}

export class CustomError extends Error {
    constructor(status: number, message: string) {
      super(message);
      Object.setPrototypeOf(this, CustomError.prototype)
    }
}

export class UserAPI {
    private users: ReadonlyArray<User>

    constructor(users: ReadonlyArray<User>) {
        this.users = users
    }

    public getUserById = (id: number): User | CustomError => {
        const foundUser = this.users.find(user => user.id === id)
        if (foundUser === undefined) {
            return new CustomError(500, "No user found.")
        } else return foundUser  
    }

    public getUsers = (): ReadonlyArray<User> | CustomError => {
        return this.users.length === 0 ? new CustomError(500, "No users found.") : this.users
    } 

    // public createUser = (user: User): User | null => {
    //     console.log("Create user", user)
    // }

    // public deleteUserById = (id: number): User | null => {
    //     console.log("Create user by id")
    // }

    // public updateUser = (id: number, user: User): User | null => {
    //     console.log("Update user")
    // }
 }
