//import package to be used
import express  from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/index";
import bodyParser from "body-parser";


//import express framework and dotenv package used to access .env data
const app=express();
dotenv.config()
app.use(bodyParser.json())
app.use("/api/v1",router)


//call database and port from .env file
const database=process.env.DATABASE
const port=process.env.PORT


//confirgure port
app.listen(port,()=>{
console.log(`port running on ${port}`)
})


//connect a database
mongoose.connect(database).then(()=>{
    console.log(`database successfuly connected`)
}).catch((err)=>{
    console.log(`database error....${err}`)
})
export default app; 