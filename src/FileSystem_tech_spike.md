# Tech Spike: Using FileSystem for Persistent Data Storage

## What is FileSystem?
FileSystem is a module that allows you to interact with the file system on your computer. It allows you to create, read, update, and delete files and directories. It also allows you to move files and directories around.

## Why FileSystem?
FileSystem is a built-in Node.js module, so it is easy to use and does not require any additional dependencies. It is also cross-platform, so it will work on any operating system.

## How does FileSystem work?
FileSystem uses a callback-based API, which means that you pass a function as an argument to the method that you want to call. The function will be called when the operation is complete, and it will be passed any results or errors that occurred during the operation.

## How do I use FileSystem?
To use FileSystem, you first need to require it in your code:
```javascript
const fs = require('fs');
```
Then, you can call any of the methods on the fs object:
```javascript
fs.readFile('file.txt', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

### Approach for Data Storage
1. Directory Structure: Create a directory named "data" within the root directory of the project. Within the "data" directory, create a file named "users.json". This file will contain an array of user objects. Each user object will have the following properties:
   * `id`: String
   * `name`: String
   * `age`: Number
   * `favColor`: String
2. Create a module named "dataAccess.js" within the "src" directory of the project. This module will contain the following functions:
    * `createUser(user)`: Create a new user and add it to the "users.json" file
    * `readUser(id)`: Retrieve a user with the given id from the "users.json" file
    * `readAllUsers()`: Retrieve all users from the "users.json" file
    * `updateUser(id, user)`: Update a user with the given id in the "users.json" file
    * `deleteUser(id)`: Delete a user with the given id from the "users.json" file

## Resources for FileSystem in Node.js
* [Node.js Documentation: File System](https://nodejs.org/api/fs.html)
* [Node.js Documentation: File System Read/Write](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback)
* [Node.js Documentation: File System Write File](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback)

## What are the limitations of FileSystem?
FileSystem is not very performant, so it should not be used for large files or directories. It also does not support asynchronous operations, so it is not suitable for use in a web server.

## Considerations and Challenges
* Concurrency: What happens if two users try to create a user at the same time? What happens if two users try to update the same user at the same time?
* Performance: What happens if the "users.json" file becomes very large? How can we improve performance?
* Error Handling: What happens if the "users.json" file is deleted? What happens if the "users.json" file is corrupted?
* Backups and Recovery: What happens if the "users.json" file is deleted? How can we recover the data?
