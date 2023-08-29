# AI UserAPI Technical Design

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
* Node.js: JavaScript runtime environment.
* Express: Web application framework for Node.js.
* FileSystem module: Built-in Node.js module for file operations.

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

User Object:
```
{
  "id": "string",
  "name": "string",
  "age": "number",
  "favColor": "string"
}

```

## Questions
* How should the API handle errors and validation?
* What authentication and authorization mechanisms will be used to secure the API?
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
1. Create a new Node.js project.
2. Install Express.
3. Create a new Express app.
4. Create a new router for the user endpoints.
5. Create a new controller for the user endpoints.
6. Create a new service for the user endpoints.
7. Create a new data access layer for the user endpoints.
8. Create a new data store for the user endpoints.
9. Create a new model for the user endpoints.
10. Create a new validation layer for the user endpoints.
11. Create a new error handling layer for the user endpoints.
12. Create a new authentication layer for the user endpoints.
13. Create a new authorization layer for the user endpoints.
14. Create a new test suite for the user endpoints.
