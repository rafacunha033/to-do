import express from 'express';
import { router as task } from './task'

const router = express.Router()

router.use("/task", task);

export { router }