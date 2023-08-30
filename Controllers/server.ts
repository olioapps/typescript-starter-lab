import { Request, Response } from 'express';
const express = require('express');
const app = express();

app.get('/', (res: Response) => {
  res.send('Hello World!')
});

app.post('/users', (req: Request, res: Response) => {
  const newUser = req.body;
  console.log("Received New User", newUser);
  res.status(201).json({ message: "User Created" });
});

app.get('/users', (res: Response) => {
  res.status(200).json({ message: "Users Found" });
});

app.get('/users/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  console.log("Received User ID", id);
  res.status(200).json({ message: "User Found" });
});

app.get('/users/:name', (req: Request, res: Response) => {
  const name = req.params.name;
  console.log("Received User Name", name);
  res.status(200).json({ message: "User Found" });
});

app.get('/users/:favColor', (req: Request, res: Response) => {
  const favColor = req.params.favColor;
  console.log("Received User FavColor", favColor);
  res.status(200).json({ message: "User Found" });
});

app.delete('/users/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  console.log("Received User ID", id);
  res.status(200).json({ message: "User Deleted" });
});

app.put('/users/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedUser = req.body;
  console.log("Received User ID", id);
  console.log("Received Updated User", updatedUser);
  res.status(200).json({ message: "User Updated" });
});

app.listen(3000, () => {
  console.log("listening on port 3000")
})