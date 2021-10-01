// create an interface called User
// with these attributes
//      id: string, optional
//      name: string
//      favoriteColor: string
//      age: name

// create a es6 class, using Typescript
// where the methods are arrow operators
// that has this method:
// add user
//      params: user of type User <-- object
//      returns: user (with an assigned id)


// create an instance of your class
// invoke the add user method with a user object that has no id
// the mthod
//      creates a new copy of the user object, using spread operator, and assigns an id
//      stores this new instance in a Record of type string, User, that exists as an instance variable (scoped to the class instance), private
//      returns the new instance


// show me via console log that the create operation worked


interface User {
    readonly id?: string
    readonly name: string
    readonly favoriteColor: string
    readonly age: number
}

interface UserFilter {
    key: (number | string)
    operator: string
    value: (number | string)
}

class UserAPI {
    private _userList: Record<string, User>
    private _idCounter: number

    constructor() {
        this._userList = {}
        this._idCounter = 0
    }

    getUsers(): User[] {
        return Object.keys(this._userList).map((key => this._userList[key]))
    }

    addUser = (user: User): User => {
        this._idCounter += 1
        const userCopy: User = { ...user, id: this._idCounter.toString() }
        this._userList[userCopy.id] = userCopy
        return userCopy
    }

    getUser = (id: string): User => {
        return this._userList[id]
    }

    deleteUser = (id: string): void => {
        delete this._userList[id]
    }

    searchUsers = (predicates: UserFilter[]): User[] => {
        if (predicates === undefined || predicates.length == 0) {
            return this.getUsers()
        }
        const filteredUsers = this.getUsers().filter((user => {
            let results: boolean[] = [] 
            let finalResult: boolean = false         
            predicates.forEach(predicate => {
                let result: boolean = false
                if (predicate.key === "favoriteColor"){
                    result = (predicate.value === user.favoriteColor)
                }
                else if (predicate.key === "age"){
                    switch(predicate.operator){
                        case "<":
                            result = (user.age < predicate.value)
                            break
                        case ">":
                            result = (user.age > predicate.value)
                            break
                        case "=":
                            result = (user.age == predicate.value)
                    }
                }
                results.push(result)
            })
            finalResult = results.every((result) => {return(result === true)}) 
            return finalResult          
        }))
        return filteredUsers
    }
}

const apiInstance = new UserAPI()
const user1 = {
    name: "Jon",
    favoriteColor: "Blue",
    age: 22,
}
const user2 = {
    name: "Alex",
    favoriteColor: "Green",
    age: 50,
}
const user3 = {
    name: "Sam",
    favoriteColor: "Blue",
    age: 45,
}
let copy1 = apiInstance.addUser(user1)
let copy2 = apiInstance.addUser(user2)
let copy3 = apiInstance.addUser(user3)
//console.log(user1)
//console.log(copy1)
//console.log(apiInstance.getUsers())
//console.log(apiInstance.getUser('2'))
//console.log(apiInstance.getUser('5'))
//apiInstance.deleteUser('1')
//console.log(apiInstance.getUsers())
const predicate1: UserFilter = {
    key: "favoriteColor",
    operator: "=",
    value: "Blue",
}
const predicate2: UserFilter = {
    key: "age",
    operator: "<",
    value: "100"

}

const predicates: UserFilter[] = [predicate1, predicate2]
const searchResult = apiInstance.searchUsers(predicates)
console.log(searchResult)