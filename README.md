# typescript-starter-lab
* Directions will be given after getting this envrionment set up

### Testing
tsc and jest should be run in different terminal windows
```T1
yarn tsc --watch
```
```T2
yarn jest --coverage --watch
```
* While not set up in this repo, it is possible to run two child processes in the same terminal with a package like concurrently: https://github.com/open-cli-tools/concurrently#readme

* This will allow both tsc and jest to watch for file changes and run tests when changes are detected.

* It is not necessary to run nodemon while running tests with jest in this case, as we are not using a server. However, if you are making changes to your typescript file, it is necessary to run tsc to compile on file changes.
### Dev
```T1
yarn tsc --watch
```
```T2
yarn nodemon -w dist dist/ts_playground.js
```
* Running these two commands in terminals will let tsc watch for changes to any file, and then nodemon will restart and run any compiled code from ts_playground.js


### TDD Workshop / Array Methods Exploration

* All workshop users should fork a branch from `tdd-workshop` as `{name}-tdd-workshop`
* Using the principles of TDD, write stub functions and tests for each problem BEFORE resolving the function bodies.
* The stub functions and failing tests should be committed in a new branch, and PR'd into the users working branch for review.
* After the failing tests have been reviewed, tests may be solved and submitted together in a single PR.
* Use of Google or AI should be limited.  If assistance is needed take note of what was searched.
* Complete `LESSON ONE` (all tests passing) before moving on to `LESSON TWO`

```javascript
// _________________________LESSON ONE_________________________

// Examples of manipulating an array of objects
// using map(), the spread operator, and destructuring

// simple arrays of people objects
const people = [{ name: "Aron", age: 42 }, { name: "Stormi", age: 24 }]
const agelessPeople = [{ name: "Aron" }, { name: "Stormi" }]

// 1. spread operator :
// use the spread operator to make a copy of an existing array

// 2. map(), the spread operator :
// add age to each person in agelessPeople

// 3. map() :
// given people array above,
// return an array of objects without an age key

// 4. destructuring, map() :
// given people array above,
// return an array of objects without an age key

// 5. destructuring, map() :
// given people array above,
// return an array of objects without an age, only the name.
// ALSO: use simplified return statement => ({ name: name }) to simply { name }

// 6. destructuring, map() :
// given people array above,
// return an array of objects whose `id` key/value is the `name` key/value from the original person
// hint: use destructure aliasing

// 7. destructuring, map() :
// given people array above,
// return an array of strings of the people's names,
// ALSO: use destructure aliasing to return the `name` as `id`

//_________________________LESSON Two_______________________________________
/*
  Computed properties,
  syntactic sugar for declaring object literals.
  Dynamically creating properties of objects.
*/

//
// (1) Computed properties: declare an object with simple computed properties
// - create a single object where the keys are defined by variables.
// const property1 = "propertyName1"
// const property2 = "propertyName2"
// ...
/* {
    ..... <--- computed properties go in here
   }
*/
// bonus: dynamically define the computed property names
// "property1" ... "propertyn" <-- and use this in the single object declaration

//
// (2) Computed properties, Destructoring: simple
// - declare a function that will create a car object with make, model, value
// function is going to take in an object with make, model, and value properties
// function is going to manufacture a new object based on the the properties destructured from the
// incoming parameter
//
// f(CAROBJECT) -> NEWCAROBJECT
//
// make the attributes of NEWCAROBJECT manufactured by this function be named differently
// from the original incoming CAROBJECT
// for example:
/*
{
  first_name: "aron"
}
->
{
  firstName: "aron"
}
*/

// (3) Computed properties, Destructoring: less simple
// add A new User to the Database where the new user's key is equal to the id
//database of current users.

// A. given a datastructure such as:
  const users = {
    "123": {
      "id": "123",
      "name": "Aron"
    },
    "456": {
      "id": "456",
      "name": "Stormi"
    }
  }

// B. create a function that has the above as a incoming parameter, that takes in the following user shape as
// second parameter:

const newUser = {
      "id": "789",
      "name": "Scott"
}

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
```