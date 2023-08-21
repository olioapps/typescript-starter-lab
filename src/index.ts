// The UserAPI object will manage its own collection of 'User' items. UserAPI can be instantiated with a single, optional argument, which is an initial User repository. UserAPI will contain expected CRUD methods, as well as some additional getter methods (to be defined in future tickets)

// Acceptance Criteria:

// User object is typed, with the following properties

// name
// age
// favColor
// id (private)
// UserAPI has initial tests that verify that it can be instantiated with, or without, an initial 'User' collection

// UserAPI has a getAllUsers method that returns an array of all users in the repo

// UserAPI.getAllUsers has a passing tests.

// default class of UserAPI
// Testing takes either no userRepo or userRepo
// UserAPI has array of Users
// UserApi has method that returns this array

export class UserAPI {
  users = {}
}

