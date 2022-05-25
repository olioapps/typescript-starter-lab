import { Users, UserFormMeta } from "./interfaces"

const mockUsers: Users = {
  "0": { id: "0", name: "minoka", age: 31, favoriteColor: "green" },
  "1": { id: "1", name: "ted", age: 23, favoriteColor: "black" },
  "2": { id: "2", name: "ron", age: 41, favoriteColor: "blue" },
  "3": { id: "3", name: "tim", age: 27, favoriteColor: "red" },
}

const userObject: UserFormMeta = {
  name: "minoka",
  age: 31,
  favoriteColor: "green",
}

const updatingUserObject: UserFormMeta = {
  name: "minoka",
  age: 100,
  favoriteColor: "red",
}

export { mockUsers, userObject, updatingUserObject }
