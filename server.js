
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import db from './db.js';


const app = express()
dotenv.config()

const PORT = process.env.PORT;
app.use(express.json());

app.get('/',(req,res)=>{
    console.log("Setup is running");
    res.send("Setup successful");
});

app.listen(PORT , () =>
    {
    console.log(`App is listenting at port ${PORT}`);
})