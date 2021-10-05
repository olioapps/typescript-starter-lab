/**
 * Required External Modules
 */

import * as dotenv from "dotenv"
import express from "express"
import cors from "cors"
import helmet from "helmet"
import { UserAPI, UserFilter, User, evaluatePredicate } from "./apiUtils"

dotenv.config();
/**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();


/**
 *  App Configuration
 */

app.use(helmet())
app.use(cors())
app.use(require('body-parser').json())


/**
 * Server Activation
 */
const apiInstance = new UserAPI

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

app.post("/users", (req, res) => {
  const newUser: User = req.body
  
  apiInstance.addUser(newUser)
  res.sendStatus(200)
})

app.get("/users", (req, res) => {
  res.status(200).send(apiInstance.getUsers())
})

app.get("/users/:id", (req, res) => {
  const user: User = apiInstance.getUser(req.params.id)
  if (user === undefined) {
    res.sendStatus(404)
  }
  else {
    res.status(200).send(user)
  }
  
})

app.delete("/users/:id", (req, res) => {
  const deletedUser: User = apiInstance.getUser(req.params.id)
  if (deletedUser === undefined){
    res.sendStatus(404).end()
  }
  else{
    apiInstance.deleteUser(req.params.id)
    res.sendStatus(200)
  }

})

app.get("/search", (req, res) => {
  const key: string = req.query.key.toString()
  const op: string = (req.query.op === undefined) ? "=" : req.query.op.toString()
  const val: string = req.query.val.toString()
  
  const searchFilter: UserFilter = {
    key: key,
    operator: op,
    value: val
  }
  
  const result: User[] = apiInstance.searchUsers([searchFilter]) 
  
  if (result === undefined || result.length == 0){
    res.sendStatus(404)
  }

  res.status(200).send(result)

})