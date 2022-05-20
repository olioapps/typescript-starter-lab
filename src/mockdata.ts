// @ts-nocheck
const mockUsers = [
  { id: "0", name: "minoka", age: 31, favoriteColor: "green" },
  { id: "1", name: "ted", age: 23, favoriteColor: "black" },
  { id: "2", name: "ron", age: 41, favoriteColor: "blue" },
  { id: "3", name: "tim", age: 27, favoriteColor: "red" },
]

const userObject = { name: "minoka", age: 31, favoriteColor: "green" }

const updatingUserObject = {
  id: "0",
  name: "minoka",
  age: 100,
  favoriteColor: "red",
}

const updatingUserObjectError = {
  name: "minoka",
  age: 100,
  favoriteColor: "red",
}

const updatingUserObjectErrorWithId = {
  id: "124324614614331461346",
  name: "minoka",
  age: 100,
  favoriteColor: "red",
}

export {
  mockUsers,
  userObject,
  updatingUserObject,
  updatingUserObjectError,
  updatingUserObjectErrorWithId,
}
