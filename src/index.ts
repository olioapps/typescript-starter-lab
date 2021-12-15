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

    public getUserById = () => {
        console.log("Get user by id")
        return 1
    } 

    public getUsers = () => {
        console.log("Get users")
        return 1
    }

    public createUser = () => {
        console.log("Create user")
        return 1
    }

    public deleteUserById = () => {
        console.log("Create user by id")
        return 1
    }

    public updateUser = () => {
        console.log("Update user")
        return 1
    }
 }
