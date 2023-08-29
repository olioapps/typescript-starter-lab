# Tech Spike: Using FileSystem for Persistent Data Storage

## Approach for Data Storage
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

## Considerations and Challenges
* Concurrency: What happens if two users try to create a user at the same time? What happens if two users try to update the same user at the same time?
* Performance: What happens if the "users.json" file becomes very large? How can we improve performance?
* Error Handling: What happens if the "users.json" file is deleted? What happens if the "users.json" file is corrupted?
* Backups and Recovery: What happens if the "users.json" file is deleted? How can we recover the data?