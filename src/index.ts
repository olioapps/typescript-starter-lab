//Define class here

export interface Car {
  readonly make: string,
  readonly model: string,
  readonly value: number
}

export interface User {
  readonly id: string,
  readonly name: string
}

export interface Users {
  readonly [userID: string]: User
}

export interface User_Repository {
  readonly items: Record<string, User>,
  readonly sort: string[];
}



export const computedProperties = (prop1: string, prop2: string) => {
  const obj = {
    [prop1]: "panda",
    [prop2]: "salad"
  }
  return obj;
}

export const createNewCar = (car: Readonly<Car>) => {
    const {make: Make, model: Model, value: Value} = car;
    return {
      Make, 
      Model, 
      Value}
  }

export const addUser = (users: Readonly<Users>, user: User) => {
  return {
    ...users,
    [user.id]: user
  }
}

export const reverseSortUsers = (user_repository: Readonly<User_Repository>) => {
  const array = user_repository.sort.map(id => {
      return (
        user_repository.items[id]
      )
    }
  )
  return array;
}

export const addUserAndId = (user_repository: Readonly<User_Repository>, user: User) => {
  console.log(user);
  return {
    items: {
    ...user_repository.items,
    [user.id]: user
    },
    sort: [user.id, ...user_repository.sort],    
  }
}

export const addUserAndIdInRegularOrder = (user_repository: Readonly<User_Repository>, user: User) => {
  const users = {
    ...user_repository.items,
    [user.id]: user
  }
  const sort = Object.keys(users).map(id => {
    return id
  })
  return {
    items: users,
    sort: sort
  }
}