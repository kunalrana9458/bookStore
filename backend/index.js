import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bookRoute from './routes/book.route.js'
import userRoute from "./routes/user.route.js"
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json())

dotenv .config();

app.get('/',(req,res) => {
    res.send("Mern Project Book Store")
})
const port=process.env.PORT;
const URL = process.env.MONGODB_URL;

// connect to mongoDB
try{
    mongoose.connect(URL);
    console.log("DB Connected successfully");
}catch(err){
    console.log("Error in DB Connection");
}

// finding routes
app.use("",bookRoute);
app.use("",userRoute)

app.listen(port,() => {
    console.log(`Server is listening at Port ${port}`);
})