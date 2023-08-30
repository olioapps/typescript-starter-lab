# Tickets

## Basic Express Server Setup
### What this is
This task is to set up a basic Express server.

### Context
The Express server needs to be configured to listen to incoming requests and respond with the appropriate data.

### Acceptance Criteria
* An Express server instance is created and initialized.
* The server is listening on port 3000.

## Implement Basic Route for Create User
### What this is
This task is to implement a basic route for creating a user.

### Context
The API needs a route to handle user creation requests.

### Acceptance Criteria
* A POST route `/users` is created.
* The route accepts JSON data in the request body.
* On request, the user data is extracted from the request body.
* User data is written to  JSON file using the FileSystem module.
* A success response is sent to the client.


## Update UserAPI Methods with FileSystem Integration
### What this is
This task is to update the UserAPI methods to integrate with the FileSystem module.

### Context
The projects UserAPI methods (getAllUsers, getUserById, addUser, updateUserById, deleteUserById) need to be updated to integrate with the FileSystem module for reading and writing user data files.

### Acceptance Criteria
* getAllUsers Method:
  1. Read all user data files from the "data" directory using the FileSystem module.
  2. Convert the read JSON data into an array of user objects.
  3. Return the array of user in the response.
* getUserById Method:
  1. Read the user data file with the provided ID from the "data" directory using the FileSystem module.
  2. Convert the read JSON data into a user object.
  3. Return the user object in the response.
* addUser Method:
  1. Generate a unique ID for the user.
  2. Write the new user data to a new JSON file with the generated ID in the "data" directory using the FileSystem module.
  3. Reutnr the fenerated ID in the response.
* updateUserById Method:
  1. Read the user data file with the provided ID from the "data" directory using the FileSystem module.
  2. Update the user data with the provided data.
  3. Write the updated user data back to the JSON file.
  Return the updated user object in the response.
* deleteUserById Method:
  1. Delete the user data file with the provided ID from the "data" directory using the FileSystem module.
  2. Return a success message in the response.


## Implement Basic Route for Get All Users
### What this is
This task is to implement a basic route for getting all users using Express routing.

### Context
The API should allow clients to retrieve a list of all stored user data.

### Acceptance Criteria
* A GET route `/users` is created.
* On request, the user data is read from the "data" directory using the FileSystem module.
* The API sends a JSON array containing all user data in the response.

## Implement Basic Route for Get User by ID
### What this is
This task is to implement a basic route for getting a user by ID using Express routing.

### Context
The API should allow clients to retrieve a specific user by ID.

### Acceptance Criteria
* A GET route `/users/:id` is created.
* On request, the user data is read from the "data" directory using the FileSystem module.
* The API sends a JSON object containing the user data in the response.

## Implement Basic Route for Update User by ID
### What this is
This task is to implement a basic route for updating a user by ID using Express routing.

### Context
Clients should be able to update existing user data.

### Acceptance Criteria
* A PUT route `/users/:id` is created.
* On request, the user data is read from the "data" directory using the FileSystem module.
* The API updates the user data with the new data from the request body.
* The updated user data is written back to the "data" directory using the FileSystem module.
* The API sends a JSON object containing the updated user data in the response.

## Implement Basic Route for Delete User by ID
### What this is
This task is to implement a basic route for deleting a user by ID using Express routing.

### Context
Clients should be able to delete existing user data.

### Acceptance Criteria
* A DELETE route `/users/:id` is created.
* On request, the user data is read from the "data" directory using the FileSystem module.
* The API removes the user JSON file.
* The API sends a success message in the response.

## Implement Data Validation Middleware
### What this is
This task is to implement a middleware function to validate incoming user data.

### Context
Incoming data needs to be validated to ensure it is in the correct format.

### Acceptance Criteria
* A middleware function using `express-validator` is created.
* The middleware checks for required fields in the request body.
* If required fields are missing, the middleware sends an error response.

## Implement Error Handling Middleware
### What this is
This task is to implement a middleware function to handle errors.

### Context
Errors should be handled to provide a consistent response to clients.

### Acceptance Criteria
* A middleware function is created to handle errors in route handlers.
* The middleware catches erros thrown during route processing.
* It sends an appropriate error response to the client, including the error message and status code.

## Write Unit Tests for Routes and Middleware
### What this is
This task is to write unit tests for the Express routes and middleware.

### Context
Unit tests ensure that the implemented functionality behaves as expected.

### Acceptance Criteria
* Unit tests are written for each route handler using Jest.
* Unit tests are written for each middleware function using Jest.
Tests verify that the correct response is sent for each route.
Tests cover different scenarios, including successful and error cases.

## Document API Using cURLs
### What this is
This task is to document the API using cURLs.

### Context
The API needs to be documented so that clients can use it.

### Acceptance Criteria
* A markdown file is created to document the API.
* The file contains cURLs for each route.
* The cURLs include example requests and responses.
* The cURLs include error cases.
