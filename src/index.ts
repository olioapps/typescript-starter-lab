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
  const carKeys = Object.keys(car);
  const carValues = Object.values(car)
  const newCarKeys = carKeys.map(key => {
    const newKey = key.split("_");
    const camelCase = newKey[1].charAt(0).toUpperCase() + newKey[1].slice(1);
    newKey[1] = camelCase
    return newKey.join("")
  });
  return {
    [`${newCarKeys[0]}`]: carValues[0],
    [`${newCarKeys[1]}`]: carValues[1],
    [`${newCarKeys[2]}`]: carValues[2],
  }
}

export const addNewUser = (db: UserDB, user: User) => {

}

export const sortUsers = (repo: UserRepo) => {

}

export const addUserToRepo = (repo: UserRepo, user: User) => {

}