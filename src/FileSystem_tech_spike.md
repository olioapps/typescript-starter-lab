# FileSystem Tech Spike

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

## What are the limitations of FileSystem?

FileSystem is not very performant, so it should not be used for large files or directories. It also does not support asynchronous operations, so it is not suitable for use in a web server.
