# Typescript-Starter-Lab
### TDD Workshop

An exploration of array methods and ES6 syntax using the principles of test driven development (TDD)

## Environment Setup

### Testing
tsc and jest should be run in different terminal windows

```
$ yarn tsc --watch
```

```
$ yarn jest --coverage --watch
```
While not set up in this repo, it is possible to run two child processes in the same terminal with a package like concurrently: https://github.com/open-cli-tools/concurrently#readme

This will allow both tsc and jest to watch for file changes and run tests when changes are detected.

It is not necessary to run nodemon while running tests with jest in this case, as we are not using a server. However, if you are making changes to your typescript file, it is necessary to run tsc to compile on file changes.
### Dev
```
$ yarn tsc --watch
```
```
$ yarn nodemon -w dist dist/ts_playground.js
```
Running these two commands in terminals will let tsc watch for changes to any file, and then nodemon will restart and run any compiled code from ts_playground.js


## TDD Workshop Instructions

* All workshop users should fork a branch from `tdd-workshop` as `{name}-tdd-workshop`
* Using the principles of TDD, write stub functions and tests for each problem BEFORE resolving the function bodies.
* The stub functions and failing tests should be committed in a *new* branch, and PR'd into the users working branch for review.
* After the failing tests have been reviewed, tests may be solved and submitted together in a single PR.
* Use of Google or AI should be limited.  If assistance is needed take note of what was searched.
* Complete `LESSON ONE` (all tests passing) before moving on to `LESSON TWO`

### LESSON ONE
####

Practice the manipulation of array and objects using `array.map`, the spread operator, and destructuring

#### Test Data:
```javascript
const people = [{ name: "Aron", age: 42 }, { name: "Stormi", age: 24 }]
const agelessPeople = [{ name: "Aron" }, { name: "Stormi" }]
```
 #### Exercises:

###### 1. Return a copy of an array:
Use the spread operator to make a copy of `people`

###### 2. Add an 'age' to agelessPeople
Use the `array.map` method and the spread operator to add `age` to each person in agelessPeople

###### 3. Remove ages from people objects:
Use the `people` array and `array.map` to return an array of objects without an 'age' key.  Be sure to use destructuring syntax inside of the map function.


###### 6. Add a new property to objects:
Given the `people` array above, return an array of objects whose `id` key/value is the `name` key/value from the original person

*Hint*: use destructure aliasing

###### 7. Return a list of names
Given the `people` array above, return an array of strings where each value is the name of a person.

Use of destructuring syntax is required.

### LESSON TWO

###### 1. Declare an object with simple computed properties
Create a single object where the keys are defined by variables.

```js
const property1 = "propertyName1"
const property2 = "propertyName2"
// ...
return {
    ..... //computed properties go in here
   }
```
**BONUS**: dynamically define the computed property names

EG: pass your function an array of numbers.  Map over this list, parsing them into strings and adding an `id` prefix so that ```1 => "id1"``` .  Use these values in the single object declaration


---
The following exercises will be working on the following data-structures:

```js
// UserRepository

const userRepository = {
  items: {
    "123": {
      "id": "123",
      "name": "Aron"
    },
    "456": {
      "id": "456",
      "name": "Stormi"
    },
    "789": {
      "id": "789",
      "name": "Scott"
    }
  },
  sort: ["789", "456", "123"],
}
```

```js
// User

const newUser = {
      "id": "789",
      "name": "Scott"
}
```

# WIP TODO:  update LESSON TWO problems from here on, so that they use the models defined above in way that makes sense
###### 2. Add a new user to the userRepository where the new user's key is equal to the id

Create a function that takes two parameters:
-  a `userRepository`
- a `user`


// ... and outputs an *immutable* copy of the original users object, with the  new user integrated into it:

const newUsers = {
  "123": {
    "id": "123",
    "name": "Aron"
  },
  "456": {
    "id": "456",
    "name": "Stormi"
  },
  "789": {
    "id": "789",
    "name": "Scott"
  }
}

// (3)
// Given an object that describes the users in a database, where there is attribute for sort order, and
// another attribute for the actual users, indexed by their id:

const userRepository = {
  items: {
    "123": {
      "id": "123",
      "name": "Aron"
    },
    "456": {
      "id": "456",
      "name": "Stormi"
    },
    "789": {
      "id": "789",
      "name": "Scott"
    }
  },
  sort: ["789", "456", "123"],
}

// (a) create a function which takes in the repository, and outputs an array of user objects in order of the sort key
// in this repository object. The output array should have the users in reverse sort order for their ids.
// f(userRepository) ->
/*
  [
    {
      "id": "789",
      "name": "Scott"
    },
    {
      "id": "456",
      "name": "Stormi"
    },
    {
      "id": "123",
      "name": "Aron"
    },
  ]
*/

// (b) create function which takes in the repository, a user object eg {"id": "011", "name": "Katlin"}, and
// returns immutable copy of the repository where:
// - inserts the new object into the items attribute
// - inserts the id of the new object into the array, such that reverse sort order is maintained
//
const originalRepository =
{
  items: {
    "A": {
      "id": "A",
      "name": "Aron"
    },
    "B": {
      "id": "B",
      "name": "Stormi"
    },
    "C": {
      "id": "C",
      "name": "Scott"
    }
  },
  sort: ["C", "B", "A"],
}

//
// f(originalRepository) ->
//

const updatedRepository = {
  items: {
    "A": {
      "id": "A",
      "name": "Aron"
    },
    "B": {
      "id": "B",
      "name": "Stormi"
    },
    "C": {
      "id": "C",
      "name": "Scott"
    },
    "D": {
      "id": "D",
      "name": "Katlin"
    }
  },
  sort: ["D", "C", "B", "A"],
}

// (c) is just like (b), except that the sort order needs to be in regular order

// (d) BONUS: pass in a sorting function that handles the sorting for you so you can use
// the same base function to handle both (b) and (c)
