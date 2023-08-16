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
  const array = Object.keys(user_repository.items).map(item => {
    const key = item;
    return (
      user_repository.items[key]
    )
  })
  return array;
}

export const addUserAndId = (user_repository: Readonly<User_Repository>, user: Users) => {

}

export const addUserAndIdInRegularOrder = (user_repository: Readonly<User_Repository>, user: Users) => {

}