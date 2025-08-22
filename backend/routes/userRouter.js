import express from "express";
import { login, register, userInfo } from "../controllers/userController.js";
import userAuth from "../middleware/userAuth.js";

const userRouter = express.Router();

userRouter.post("/login", login);
userRouter.post("/register", register);
userRouter.get("/userInfo", userAuth, userInfo);

export default userRouter;
