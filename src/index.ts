// Define class here

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
    status: number
    
    constructor(status: number, message: string) {
      super(message);
      this.status = status
      Object.setPrototypeOf(this, CustomError.prototype)
    }
}

export class UserAPI {
    private users: ReadonlyArray<User>

    constructor(users: ReadonlyArray<User>) {
        this.users = users
    }

    public getUserById = (id: number): User => {
        const foundUser = this.users.find(user => user.id === id)
        if (!foundUser) {
            throw new CustomError(404, "No user found.")
        } else {
            return foundUser  
        }
    }

    public getUsers = (): ReadonlyArray<User> => {
        return this.users
    } 

    public createUser = (user: User): User => {
        const userIdExists = this.users.find(existingUser => existingUser.id === user.id)

        if (userIdExists) {
            throw new CustomError(405, "User with id already exists.")
        } else { 
            this.users = [user, ...this.users]
            return user 
        }
    }  

    public deleteUserById = (id: number): User => {
        const user = this.users.find(existingUser => existingUser.id === id)

        if (user) {
            this.users = this.users.filter(user => user.id !== id)
            return user
        } else throw new CustomError(404, "No user with that id found.")
    } 

    public updateUser = (id: number, updatedUser: User): User => {
        let targetUser = this.users.find(existingUser => existingUser.id === id)

        if (targetUser) {
            this.users = this.users.map(user => {
                    if (user.id === id) {
                        if (user.name === updatedUser.name) {
                            return { id, ...updatedUser }
                        } else {
                            throw new CustomError(405, "Different user with same id already exists.")
                        }
                } else {
                    return user
                }
            })
            return { id, ...updatedUser }
        } else {
            throw new CustomError(404, "No user found by that id.")
        }
    }
}

// 
// 
// EVENT API

export interface Event {
    readonly timestamp: number
    readonly eventType: "new message" | "view" | "screenshot"
}

export class EventScoreAPI {
    private score: number
    private eventArr: ReadonlyArray<Event>

    constructor(eventArr: ReadonlyArray<Event>) {
        this.eventArr = eventArr
        this.score = 0
    }

    public calcHighestScoreArrSequence = (): ReadonlyArray<Event> => {
        let tempCount: number = 0
        let highestScoreArr: ReadonlyArray<Event> = []

        if (this.eventArr.length <= 5) {
            return this.eventArr
        } else {
            this.eventArr.forEach((event, i) => {
                const { eventType } = event
                if (eventType === "screenshot") {
                    tempCount += 3
                    } else if (eventType === "view") {
                        tempCount += 2
                    } else tempCount += 1
            
                if (i > 4) {
                    if (eventType[i - 1] === "screenshot") {
                        tempCount - 3
                    } else if (eventType[i - 1] === "view") {
                        tempCount - 2
                    } else tempCount - 1
                }

                if (tempCount > this.score) {
                    highestScoreArr = this.eventArr.slice(i - 4, i + 1)
                    return highestScoreArr
                }
            })

        }
        return highestScoreArr
    }
}
