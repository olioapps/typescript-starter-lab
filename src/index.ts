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
  const { car_make: carMake, car_model: carModel, car_value: carValue } = car
  return {
    carMake: carMake,
    carModel: carModel,
    carValue: carValue
  }
}

export const addNewUser = (db: UserDB, user: User) => {
  return { ...db, 
    [user.id]: user,
  }
}

export const sortUsers = (repo: UserRepo) => {
  return repo.sort.map(id => {
    return repo.items[id]
  })
}

export const addUserToRepo = (repo: UserRepo, user: User) => {
  const { items, sort } = repo;
  const addUser = {
    ...items,
    [user.id]: user,
  }
  sort.unshift(user.id)
  return { 
    items: addUser, 
    sort, }
}