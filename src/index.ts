//Define class here

export interface User {
    readonly id?: number
    readonly name: string
    readonly age: number
    readonly color: string
}

export class UserAPI {
    private users: ReadonlyArray<User>

    constructor() {
        this.users = [
            {
                id: 1,
                name: "Michelle",
                age: 30,
                color: "rainbow",
            },
            {
                id: 2,
                name: "Vintage Aaron",
                age: 35,
                color: "blue",
            },
            {
                id: 3,
                name: "Derek",
                age: 28,
                color: "green",
            },
            {
                name: "George",
                age: 32,
                color: "red",
            },
        ]
    }

    public getUserById = (id: number): User | null => {
        console.log("Get user by id")
    } 

    public getUsers = (): ReadonlyArray<User> | null => {
        console.log("Get users")
    }

    public createUser = (user: User): User | null => {
        console.log("Create user", user)
    }

    public deleteUserById = (id: number): User | null => {
        console.log("Create user by id")
    }

    public updateUser = (id: number, user: User): User | null => {
        console.log("Update user")
    }
 }
