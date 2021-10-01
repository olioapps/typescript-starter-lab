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

class UserAPI{
    private _userList : Record<string, User> 
    private _idCounter : number
    constructor(){
        this._userList = {}
        this._idCounter = 0
    }
    get userList(){
        return Object.keys(this._userList).map((key => this._userList[key]))
    }
    addUser = (user: User) => {
        this._idCounter += 1
        const userCopy: User = {...user, id: this._idCounter.toString()}
        this._userList[userCopy.id] = userCopy
        return userCopy
    }
    getSingleUser(id: string){
        return this._userList[id]
    }
    deleteUser(id: string){
        delete this._userList[id]
    }
}

const apiInstance = new UserAPI
const user1 = {
    name: "Jon",
    favoriteColor: "Blue",
    age: 22
}
const user2 = {
    name: "Alex",
    favoriteColor: "Green",
    age: 50
}
let copy1 = apiInstance.addUser(user1)
let copy2 = apiInstance.addUser(user2)
console.log(user1)
console.log(copy1)
console.log(apiInstance.userList)
console.log(apiInstance.getSingleUser('2'))
console.log(apiInstance.getSingleUser('5'))
apiInstance.deleteUser('1')
console.log(apiInstance.userList)