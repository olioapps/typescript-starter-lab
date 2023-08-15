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
  readonly items: object,
  readonly sort: Array<string>
}


export const computedProperties = (prop1: string, prop2: string) => {

}

export const createNewCar = (car: Readonly<Car>) => {

}

export const newCarNewAttributes = (car: Readonly<Car>) => {

}

export const addUser = (users: Readonly<Users>, user: User) => {

}

export const reverseSortUsers = (user_repository: Readonly<User_Repository>) => {

}

export const addUserAndId = (user_repository: Readonly<User_Repository>, user: Users) => {

}

export const addUserAndIdInRegularOrder = (user_repository: Readonly<User_Repository>, user: Users) => {

}