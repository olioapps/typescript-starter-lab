# Tickets for AI UserAPI

## Install & Config Express
### What this is
Set up the Express.js framework in the project to create a foundation for building the UserAPI.

### Context
Up to this point, our API has focused solely on the method logic for CRUD operations. However, for a comprehensive and production-ready API, we need to build out the infrastructure that enables routing, HTTP request handling, and middleware support. Express.js, being a widely-used framework for building web applications and APIs, will provide the necessary tools to achieve this transition seamlessly.

### Acceptance Criteria
* Express.js is installed as a dependency in the project.
* The existing method logic is refactored to fit within the Express.js application structure.
* Endpoints for a basic test route are defined, returning a response to confirm the server's correct operation
* The API responds to HTTP requests and is ready to accomodate the routing and middleware required for a complete UserAPI implentation.

## Define Routes for CRUD Operations
### What this is
Create route definitions for each CRUD operation following RESTful principles.

### Context
The UserAPI will be a RESTful API, meaning that it will follow the REST architectural style. REST is an acronym for REpresentational State Transfer. RESTful APIs are characterized by the following properties:
* Client-Server Architecture: The client and server are independent of each other. The client is not concerned with data storage and the server is not concerned with the user interface.
* Stateless: Each request from the client to the server must contain all of the information necessary to understand the request. The server cannot store information about the client's state.
* Cacheable: The server must indicate whether the response can be cached or not.
* Uniform Interface: The interface between the client and the server must be uniform. This constraint is further broken down into the following sub-constraints:
  * Resource-Based: The client and server communicate using resources. A resource is any information that can be named. A resource is accessed via a unique identifier (e.g. URI).
  * Manipulation of Resources Through Representations: A representation is data that represents a resource. The client sends a representation of the resource to the server and the server sends a representation of the resource to the client.
  * Self-Descriptive Messages: Each message from the client to the server must contain enough information to describe how the message should be processed.
  * Hypermedia as the Engine of Application State (HATEOAS): The server sends hypermedia links to the client in the response. The client uses these links to dynamically navigate the API.

### Acceptance Criteria
* Routes are defined for creating, reading, updating, and deleting users.
* RESTful conventions are followed, using appropriate HTTP methods (POST, GET, PUT, DELETE) and status codes (200, 201, 400, 404, 500).
* Each route is associated with the corresponding function to handle the operation.

## Implement CRUD Functions Using FileSystem
### What this is
Implement the CRUD functions using the FileSystem module to read and write to the data file.

### Context
The UserAPI will use the FileSystem module to read and write to the data file. The FileSystem module is a core module in Node.js and does not need to be installed via npm. It provides an API for interacting with the file system. The API is asynchronous and uses callback functions. The following functions will be used to implement the CRUD functions:
* `fs.readFile()`: Read the data file
* `fs.writeFile()`: Write to the data file

### Acceptance Criteria
