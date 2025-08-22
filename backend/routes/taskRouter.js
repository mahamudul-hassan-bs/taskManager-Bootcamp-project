import express from "express";
import {
  addTask,
  allTask,
  deleteTask,
  taskStats,
  updateTask,
} from "../controllers/taskController.js";
import userAuth from "../middleware/userAuth.js";

const taskRouter = express.Router();

taskRouter.post("/addTask", userAuth, addTask);
taskRouter.put("/updateTask/:id", userAuth, updateTask);
taskRouter.delete("/deleteTask/:id", userAuth, deleteTask);
taskRouter.get("/allTask", userAuth, allTask);
taskRouter.get("/taskStats", userAuth, taskStats);
export default taskRouter;
