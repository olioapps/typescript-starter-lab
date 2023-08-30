# AI UserAPI Technical Design

## Purpose
* Create a UserAPI using Express, FileSystem, and cURLS.
* The project will wrap the current UserAPI methods in an Express application so it is queryable through endpoints and the data is persistent.

# Table of Contents
1. [Overview](#overview)
2. [Goal](#goal)
3. [Known Resources](#known-resources)
4. [High Level Design](#high-level-design)
5. [Shapes](#shapes)
6. [Questions](#questions)
7. [Test Cases](#test-cases)
8. [Approach](#approach)

## Overview
This document outlines the technical design for the AI UserAPI project. It will include the goal of the project, known resources, high level design, shapes, questions, test cases, and approach.

## Goal
The goal of this project is to create a RESTful Express API that allows the storage and retrieval of user information. The user information will include fields such as name, age, favorite color, and an ID for each user.

## Known Resources
* Express.js is a Node.js module that allows for creating web applications. It is not a core module and must be installed via npm.
  * [Tech Spike: Using Express.js to Create a RESTful API](./tech_spike_express.md)
  * [Express.js](https://expressjs.com/)
  * [Express.js RESTful API](https://expressjs.com/en/starter/examples.html)
  * [Express.js Static Files](https://expressjs.com/en/starter/static-files.html)
* FileSystem is a Node.js module that allows for reading and writing to the file system. It is a core module and does not need to be installed via npm.
  * [Tech Spike: FileSystem for Persistent Data Storage](./tech_spike_fs.md)
  * [FileSystem](https://nodejs.org/api/fs.html)
  * [FileSystem Read/Write](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback)
* cURLs is a command line tool for transferring data with URL syntax. It is not a core module and must be installed via npm.
  * [cURL](https://curl.haxx.se/)
  * [cURL GET](https://curl.haxx.se/docs/manpage.html#-g)
  * [cURL POST](https://curl.haxx.se/docs/manpage.html#-d)
  * [cURL PUT](https://curl.haxx.se/docs/manpage.html#-T)
  * [cURL DELETE](https://curl.haxx.se/docs/manpage.html#-X)

## High Level Design
The API will be built using Express and will interact with the FileSystem module to perform CRUD operations. It will follow RESTful principles and have the following endpoints:

`addUser`: POST /users
* Create a new user with the provided user information.
* Request body: JSON object containing user details (name, age, favColor).
* Response: JSON object with the created user's ID.

`getAllUsers`: GET /users
* Retrieve a list of all users.
* Response: JSON array of user objects.

`getUserById`: GET /users/:id
* Retrieve user information for a specific user by ID.
* Response: JSON object representing the user.

`searchUsersByName` : GET /user
* Retrieve user information for a specific name
* Response: JSON object representing the user
* Request body: JSON object containing user details (name)

`searchUserByFavColor` : GET /user
* Retriever user information for users with a specific favColor
* Response: JSON object representing the User
* Request body: JSON object containing user details (favColor)

`updateUserById`: PUT /users/:id
* Update user information for a specific user by ID.
* Request body: JSON object containing updated user details.
* Response: JSON object representing the updated user.

`deleteUserById`: DELETE /users/:id
* Delete a specific user by ID.
* Response: JSON object indicating successful deletion.

## Shapes
#### User Object:
```
{
  "id": "string",
  "name": "string",
  "age": "number",
  "favColor": "string"
}

```

## Architecture
1. Controllers:
  * Define routes using Express.
  * Handle incoming requests and delegate to appropriate providers.
  * Keep route handling logic clean and focused.
2. Providers:
  * Contains functions that handle requests from controllers.
  * Access services for data retrieval and manipulation.
  * Responsible for processing input, performing validations, and error handling.
3. Services:
  * UserAPI Service: Interface for accessing user data.
  * FileSystem Service: Interacts with the FileSystem module for CRUD operations.
  * Provides abstraction for data access to decouple from underlying implementation.
4. Data Access:
  * UserAPI Service interacts with the FileSystem Service to retrieve and manage user data.
  * FileSystem Service reads and writes data files using the FileSystem module.
  * Data is stored in a JSON file.

## Questions
* How do we want to handle errors?
  * What should the response be?
  * What should the status code be?
* How do we want to handle invalid requests?
  * What should the response be?
  * What should the status code be?
* How do we want to handle duplicate users?
* What authentication and authorization do we want to implement?
* Is there a specific format or validation for the ID field?

## Test Cases
1. Create User: 
* Request: POST '/users'
* Expected response: Status 201 Created, User object with ID
```
{
  "name": "John Doe",
  "age": 25,
  "favColor": "blue"
}
```
2. Get All Users
* Request: GET /users
* Expected Response: Status 200 OK, JSON array of user objects.

3. Get User by Id
* Request: GET /users/:id
* Expected Response: Status 200 OK, User object.

4. Update User By Id
* Request: PUT 'users/:id'
* Expected Response: Status 200 OK, Updates user object
```
{
  "name": "Jane Smith",
  "age": 30,
  "favColor": "green"
}
```
5. Delete User by ID
* Request: DELETE /users/:id
* Expected Response: Status 200 OK, Success message.


## Approach
1. **Directory Structure**:
   Organize your project using the following directory structure:
   ```
   project-root/
   ├── controllers/
   │   └── userController.js
   ├── providers/
   │   └── userProvider.js
   ├── services/
   │   ├── userAPIService.js
   │   └── fileSystemService.js
   ├── data/
   ├── app.js
   └── ...
   ```

2. **Express Server Setup**:
   - In `app.js`, set up the basic Express server:
     ```javascript
     const express = require('express');
     const app = express();
     const PORT = process.env.PORT || 3000;

     app.listen(PORT, () => {
       console.log(`Server is running on port ${PORT}`);
     });
     ```

3. **FileSystemService**:
   - Implement functions in `fileSystemService.js` to read and write JSON files using the FileSystem module.
   - These functions will handle CRUD operations on user data files.

4. **UserAPIService**:
   - In `userAPIService.js`, create functions that interact with the FileSystemService for data access.
   - Implement functions to handle CRUD operations for user data.

5. **UserProvider**:
   - Implement functions in `userProvider.js` that handle requests from the userController.
   - Use the UserAPIService to perform data operations.

6. **UserController**:
   - In `userController.js`, define Express routes and route handlers.
   - Utilize the UserProvider to process incoming requests.

7. **Middleware and Error Handling**:
   - Implement middleware functions for JSON parsing, CORS, and error handling.
   - Apply middleware functions globally using `app.use`.

8. **Testing**:
   - Write unit tests for each layer: UserAPIService, FileSystemService, UserProvider, and UserController.
   - Use testing libraries such as Mocha, Chai, and Supertest to ensure functionality and integration.

9. **Documentation**:
   - Document your API endpoints using tools like Swagger or Postman.
   - Provide clear documentation for your architectural layers and how they interact.
