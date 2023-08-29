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
* Express.js
  * [Tech Spike: Using Express.js to Create a RESTful API](./tech_spike_express.md)
  * [Express.js](https://expressjs.com/)
  * [Express.js RESTful API](https://expressjs.com/en/starter/examples.html)
  * [Express.js Static Files](https://expressjs.com/en/starter/static-files.html)
  * Express.js is a Node.js module that allows for creating web applications. It is not a core module and must be installed via npm.
* FileSystem
  * [Tech Spike: FileSystem for Persistent Data Storage](./tech_spike_fs.md)
  * [FileSystem](https://nodejs.org/api/fs.html)
  * [FileSystem Read/Write](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback)
  * FileSystem is a Node.js module that allows for reading and writing to the file system. It is a core module and does not need to be installed via npm.
* cURLs
  <!-- what are cURLS and how will we use them with express and FileSystem -->
  * [cURL](https://curl.haxx.se/)
  * [cURL GET](https://curl.haxx.se/docs/manpage.html#-g)
  * [cURL POST](https://curl.haxx.se/docs/manpage.html#-d)
  * [cURL PUT](https://curl.haxx.se/docs/manpage.html#-T)
  * [cURL DELETE](https://curl.haxx.se/docs/manpage.html#-X)
  * cURL is a command line tool for transferring data with URL syntax. It is not a core module and must be installed via npm.

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

`searchUserByFavColor` : GET /user
* Retriever user information for users with a specific favColor
* Response: JSON object representing the User

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
1. Install and configure Express
2. Define routes for each CRUD operation following RESTful principles.
3. Define functions for each route that will perform the CRUD operation using the FileSystem module.
4. Define functions for each route that will handle errors and invalid requests.
5. Use the FileSystem module to read and write to the data file.
6. Write unit tests for each route.
7. Document the API using cURLs.
