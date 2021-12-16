//Define class here

interface User {
    readonly id?: number
    readonly name: string
    readonly age: number
    readonly color: string
}

export class UserAPI {
    users: ReadonlyArray<User>

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

    public getUserById = (id: number): User => {
        console.log("Get user by id")
    } 

    public getUsers = (): ReadonlyArray<User> => {
        console.log("Get users")
    }

    public createUser = (user: User): User => {
        console.log("Create user", user)
    }

    public deleteUserById = (id: number): User => {
        console.log("Create user by id")
    }

    public updateUser = (id: number, user: User): User => {
        console.log("Update user")
    }
 }
