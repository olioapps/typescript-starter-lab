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

export const howdyMaker =(num: number) => {

}

export const carMaker = (car: Car) => {

}

export const addNewUser = (db: UserDB, user: User) => {

}

export const sortUsers = (repo: UserRepo) => {

}

export const addUserToRepo = (repo: UserRepo, user: User) => {

}