interface IUser {
  id?: string
  name: string
  favColor: string
  age: number
}

class UserAPI {
  private _users: Array<IUser>

  constructor() {
    this._users = [{ id: "1", name: "andy", favColor: "blue", age: 247 }]
  } 

  addUser(user: IUser) {
    if (user.id) {
      throw new SyntaxError("Please resubmit without pre-exisitng ID field.")
    } 
    
    user.id = Date.now().toString()
    const result = (this._users).find( ( { name, favColor, age }: IUser) => (name === user.name && favColor === user.favColor && age === user.age))
    
    if (result) {
      throw new Error("A user with those properties already exists in the database.")
    } 
    
    this._users.push(user)
    return user
  }

  getUserById(id: string) {
    const foundUser = this._users.find( user => user.id === id) 
    
    if (foundUser) {
      return foundUser
    }
    throw new ReferenceError(`No user found with id ${id}.`)
  }

  get_Users() {
    if (this._users === null || this._users === undefined) {
      throw new Error(`User Dataset not found`)
    }
    return this._users
  }

  deleteUserById(id: string) {
    const indexOfUser = this._users.findIndex( user => user.id === id)
    const user = this.getUserById(id)
    
    if (indexOfUser > -1) {
      this._users.splice(indexOfUser,1)
      return user
    } else{
      throw new ReferenceError(`No user found with id ${id}.`)
    }  
  }

  searchUserByName(name: string) {
    const users = this._users.filter( user => user.name.toLowerCase() === name.toLowerCase())
    
    if (users.length) {
      return users
    } 
    throw new ReferenceError(`No user found with name ${name}`)
  }

  search_UsersByFavoriteColor(color: string) {
    const users = this._users.filter( user => user.favColor.toLowerCase() === color.toLowerCase())
    if (users.length) {
      return users
    } 
    throw new ReferenceError(`No users favorite color is ${color}`)
  }
  
}


////////////////////////////////////////////////////////////////////////////////////////


const x = new UserAPI()

const user2 = {
  name: "Andy",
  favColor: "Green",
  age: 200
} 
const user3 = {
  name: "Sarah",
  favColor: "Blue",
  age: 200
} 
const userDuplicate = {
  name: "andy",
  favColor: "blue",
  age: 247
}
const userWithId = {
  id: "5",
  name: "andy",
  favColor: "blue",
  age: 200
}


try {
  console.log("GETALL:", x.get_Users())
} catch (error: any) {
  console.log("GETALL:", error.name,":", error.message)
}

try {
  console.log("ADD:", x.addUser(user2))
} catch (error: any) {
  console.log("ADD:", error.name,":", error.message)
}

try {
  console.log("ADD:", x.addUser(user3))
} catch (error: any) {
  console.log("ADD:", error.name,":", error.message)
}

try {
  console.log("ADD:", x.addUser(userDuplicate))
} catch (error: any) {
  console.log("ADD:", error.name,":", error.message)
}

try {
  console.log("ADD:", x.addUser(userWithId))
} catch (error: any) {
  console.log("ADD:", error.name,":", error.message)
}

try {
  console.log("GET:", x.getUserById("1"))
} catch (error: any) {
  console.log("GET:", error.name,":", error.message)
}

try {
  console.log("GET:", x.getUserById("100"))
} catch (error: any) {
  console.log("GET:", error.name,":", error.message)
}

try {
  console.log("GETALL:", x.get_Users())
} catch (error: any) {
  console.log("GETALL:", error.name,":", error.message)
}

try {
  console.log("SEARCH:", x.searchUserByName("Andy"))
} catch (error: any) {
  console.log("SEARCH:", error.name,":", error.message)
}

try {
  console.log("SEARCH:", x.searchUserByName("Jessica"))
} catch (error: any) {
  console.log("SEARCH:", error.name,":", error.message)
}

try {
  console.log("SEARCH COLOR:", x.search_UsersByFavoriteColor("Blue"))
} catch (error: any) {
  console.log("SEARCH COLOR:", error.name,":", error.message)
}

try {
  console.log("SEARCH COLOR:", x.search_UsersByFavoriteColor("Pink"))
} catch (error: any) {
  console.log("SEARCH COLOR:", error.name,":", error.message)
}

try {
  console.log("DELETE:", x.deleteUserById("1"))
} catch (error: any) {
  console.log("DELETE:", error.name,":", error.message)
}

try {
  console.log("DELETE:", x.deleteUserById("1"))
} catch (error: any) {
  console.log("DELETE:", error.name,":", error.message)
}
