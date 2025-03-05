import express from "express"
import taskController from "../controllers/taskController";

const router = express.Router();

router.route("/").get((req, res) => taskController.find(req, res))
router.route("/").post((req, res) => taskController.create(req, res))


export { router }