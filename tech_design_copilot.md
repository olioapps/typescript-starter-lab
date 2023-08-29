# Using AI as a Developer Tool

## Purpose
* Create a UserAPI using Express, FileSystem, and cURLS.
* The project will wrap the current UserAPI methods in an Express application so it is queryable through endpoints and the data is persistent.

## Scope
This document covers the design and implementation details of the Express application, FileSystem integration, and cURLS.

## Table of Contents
* [Known Resources](#known-resources)
* [High Level Design](#high-level-design)
* [Shapes](#shapes)
* [Questions](#questions)
* [Test Cases](#test-cases)
* [Implementation Details](#implementation-details)

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
The API will be built using Express and will communicate with FileSystem module to perform CRUD operations on the data. The API will be able to be queried using cURLs. It will follow RESTful principles and have the following endpoints:
1. Create User: POST `/users`
  * Create a new user
  * Request Body: JSON object with the following properties:
    * `name`: String
    * `age`: Number
    * `favColor`: String
  * Response Body: JSON object with the following properties:
    * `id`: String
    * `name`: String
    * `age`: Number
    * `favColor`: String
2. Read User: GET `/users/:id`
  * Retrieve user with the given id
  * Response Body: JSON object with the following properties:
    * `id`: String
    * `name`: String
    * `age`: Number
    * `favColor`: String
3. Get All Users: GET `/users`
  * Retrieve all users
  * Response Body: JSON array of JSON objects with the following properties:
    * `id`: String
    * `name`: String
    * `age`: Number
    * `favColor`: String
4. Update User: PUT `/users/:id`
  * Update user with the given id
  * Request Body: JSON object with the following properties:
    * `name`: String
    * `age`: Number
    * `favColor`: String
  * Response Body: JSON object with the following properties:
    * `id`: String
    * `name`: String
    * `age`: Number
    * `favColor`: String
5. Delete User: DELETE `/users/:id`
  * Delete user with the given id
  * Response Body: JSON object with the following properties:
    * `id`: String
    * `name`: String
    * `age`: Number
    * `favColor`: String

## Shapes
#### User Object:
```javascript
{
  id: String,
  name: String,
  age: Number,
  favColor: String
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
* Create User
  * Valid request
  * Invalid request
  * Duplicate user
  * Invalid/missing data
* Read User
  * Valid request
  * Invalid request
* Get All Users
  * Valid request
  * Invalid request
* Update User
  * Valid request
  * Invalid request
  * Invalid/missing data
* Delete User
  * Valid request
  * Invalid request

## Implementation Details
1. Install and configure Express
2. Define routes for each CRUD operation following RESTful principles.
3. Define functions for each route that will perform the CRUD operation using the FileSystem module.
4. Define functions for each route that will handle errors and invalid requests.
5. Use the FileSystem module to read and write to the data file.
6. Write unit tests for each route.
7. Document the API using cURLs.

