import express from "express";
import cors from "cors";
import userRouter from "./routes/userRouter.js";
import connectDB from "./config/db.js";
import taskRouter from "./routes/taskRouter.js";

const app = express();

const port = 5000;
app.use(express.json());
app.use(cors());
connectDB();

app.use("/api/user", userRouter);
app.use("/api/task", taskRouter);

app.get("/", (req, res) => {
  res.send("API is running");
});

app.listen(port, () => {
  console.log("App is running on http://localhost:" + port);
});
