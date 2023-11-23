import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'; //for using .env file
import Userrouter from './route/user.route.js';
dotenv.config();
//Getting from .env file and in mongo for password conataining @ will we encoded as %40 
//https://www.eso.org/~ndelmott/url_encode.html refer this for url encoding
mongoose.connect(process.env.MONGO).then(()=>
    {
        console.log("Connected to db");
    }
) .catch((err)=>   {
    console.log(err, "error ");
})
const app = express();
app.listen(3000,() =>{
console.log("server is running")
});

app.use('/api/user',Userrouter);