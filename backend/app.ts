import express from "express";
import connect from "./db/conn";
import cors from 'cors';
import { router } from "./routes/routes";

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

connect()

app.use("api/", router)

app.listen(port, () => [
    console.log("Hello there!")
])