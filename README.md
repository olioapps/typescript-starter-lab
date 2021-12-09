# typescript-starter-lab

// user object has these fields
// id (optional)
// name
// age
// color
// -create a class called UserAPI
// it has a class property called users, which is just a map {}
// add the following functions to the class, using strict typescript
// 1. getUser by id (eg. getUser = (id)=  > { return ...})
// 2. getUsers (returns all users in array)
// 3. createUser has argument of user object {}. Make sure to assign an id property to the user object
// 4. deleteUser by id
// 5. updateUser has argument of user object
// each of the functions will manipulate / access the users class property
// use immutability via the spread operator:  { ...user, id: “myID” }
// show that these operations work by creating an instance of your class, and calling the methods
// and console logging the output
// const myApi = new UserApI()
// myApi.xxx()

### Development

```bash
yarn install
yarn dev
```

# Might need this later
"./node_modules/@types/mocha/index.d.ts",

