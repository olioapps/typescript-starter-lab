# Tech Spike: Using Express.js to Create a RESTful API

## Approach for API Development
### Express.js Setup
1. Installation: `npm install express`
2. Basic Server Setup: Create a server entry point (e.g. 'app.js'). Import Express and set up the server to listen on a port (e.g. 3000):
```javascript
const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
```
### Routing and Middleware
1. Routing: Define routes for the API endpoints using `app.get()`, `app.post()`, `app.put()`, and `app.delete()`. Each route should have a path and a handler function. The handler function should send a response to the client.
2. Middleware: Implement middleware functions for parsing JSON data, handling CORS, and error handling. Middleware functions are functions that have access to the request object, the response object, and the next middleware function in the application's request-response cycle. The next middleware function is commonly denoted by a variable named `next`. User `app.use()` to add middleware functions to the application's request-response cycle.

### Route Implemntation
1. Route Handling: Create route handlers for each CRUD operation. User `req.params` to access the route parameters. Use `req.body` to access the request body. Use `res.send()` to send a response to the client.
2. Reading and Writing Files: Use the FileSystem module to read and write to the data file. Use `fs.readFile()` to read the data file. Use `fs.writeFile()` to write to the data file.
3. Response Handling: Send appropriate HTTP responses using `res.status()` and `res.send()`. Use `res.status()` to set the status code of the response. Use `res.send()` to send a response to the client.

## Resources for Express.js
* [Express.js Documentation](https://expressjs.com/)
* [Express.js Documentation: Hello World Example](https://expressjs.com/en/starter/hello-world.html)
* [Express.js Documentation: Basic Routing](https://expressjs.com/en/starter/basic-routing.html)
* [Handling CORS in Express.js](https://expressjs.com/en/resources/middleware/cors.html)
* [Express.js Documentation: Error Handling](https://expressjs.com/en/guide/error-handling.html)

## Considerations and Challenges
* Security: How can we ensure that the API is secure?
* Authentication and Authorization: How can we implement authentication and authorization?
* Validation: How can we validate the data?
* Testing: How can we test the API?