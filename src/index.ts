interface Car {
  car_make: string,
  car_model: string,
  car_value: number
}

interface NewCar {
  carMake: string,
  carModel: string,
  carValue: number
}

export interface UserDB {
  [key: string]: User
}

export interface User {
  id: string,
  name: string
}

interface UserRepo {
  items: UserDB,
  sort: Array<string>
}

export const computerProp =(userInput: string) => {
  let i = 0;
  return {
    [`${userInput}${i++}`]: i,
    [`${userInput}${i++}`]: i,
    [`${userInput}${i++}`]: i,
  }
}

export const carMaker = (car: Car) => {

}

export const addNewUser = (db: UserDB, user: User) => {

}

export const sortUsers = (repo: UserRepo) => {

}

export const addUserToRepo = (repo: UserRepo, user: User) => {

}