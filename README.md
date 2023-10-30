# User API: Enhanced
###### A Typescript Starter Lab Project

## Environment / Setup
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

## Lab Overview:
Use Chat GPT and/or other AI tools to implement a basic 'User' CRUD API.

How and when to leverage AI during different development stages is TBD at the time this project is assigned

---

## Technical/Functional Requirements

The API should include the following architectural features:
### Express server
The server will provide required routes and handlers for CRUD requests

### UserApi Class object
A UserApi class object will instantiated to handle CRUD operations.

Required methods:
- addUser
- deleteUserById
- updateUserById
- getUserById

The 'User' object should contain types for fist name, last name, age, and favorite color (optional)

### Persistent Data
Use File System to create, update, and delete persisted User resources.

### Data Access Layer
The 'UserApi' must interact with a data access layer (DAL).

### Route 'Provider' architecture
Express route handlers should delegate their responsibilities to a library of 'provider' or 'handler' functions.

These functions directly invoke the UserApi to perform requested actions

### Tests (Jest)
The testing framework should include tests for all architectural layer, excluding the router