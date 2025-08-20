import express from 'express'
import userRouter from './routes/userRouter.js';
import connectDB from './config/db.js';

const app = express()

const port = 5000;
app.use(express.json());

connectDB();

app.use("/api/user", userRouter)

app.get("/",(req,res)=>{
    res.send("API is running")
})

app.listen(port,()=>{
console.log("App is running on http://localhost:"+port)
})