import { Request, Response } from 'express';
const express = require('express');
const UserProvider = require('../Providers/UserProvider');

const app = express();

app.get('/', (req: Request, res: Response) => {
  console.log("Received Request");
  return res.status(200).json({ message: "Hello World" });
});

app.post('/users', (req: Request, res: Response) => {
  try {
    const user = req.body;
    const createdUser = UserProvider.createUser(user);
    return res.status(200).json(createdUser);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
});

app.get('/users', (req: Request, res: Response) => {
  try {
    const users = UserProvider.getAllUsers();
    return res.status(200).json(users);
  } catch (err: any) {
    return res.status(400).json({ message: err.message });
  }
});

app.get('/users/:id', (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const user = UserProvider.getUserById(id);
    return res.status(200).json(user);
  } catch (err: any) {
    return res.status(400).json({ message: err.message });
  }
});

app.get('/users/:name', (req: Request, res: Response) => {
  try {
    const name = req.params.name;
    const user = UserProvider.getUserByName(name);
    return res.status(200).json(user);
  } catch (err: any) {
    return res.status(400).json({ message: err.message });
  }
});

app.get('/users/:favColor', (req: Request, res: Response) => {
  try {
    const favColor = req.params.favColor;
    const user = UserProvider.getUserByFavColor(favColor);
    return res.status(200).json(user);
  } catch (err: any) {
    return res.status(400).json({ message: err.message });
  }
});

app.delete('/users/:id', (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deletedUser = UserProvider.deleteUser(id);
    return res.status(200).json(deletedUser);
  } catch (err: any) {
    return res.status(400).json({ message: err.message });
  }
});

app.put('/users/:id', (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const user = req.body;
    const updatedUser = UserProvider.updateUser(id, user);
    return res.status(200).json(updatedUser);
  } catch (err: any) {
    return res.status(400).json({ message: err.message });
  }
});

app.listen(3000, () => {
  console.log("listening on port 3000")
})