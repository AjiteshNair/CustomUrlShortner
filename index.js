import express from "express";
import mongoose from "mongoose";
import shortnerApi from "./api/shortner.js";
import bodyparser from "body-parser";
//import shortid from "shortid"
const app = express();

app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
        res.render('layout')
})

// app.post('/short', async(req,res)=>{
//         await
// })

import dotenv from 'dotenv';
//import shortid from "shortid";
dotenv.config();
const port=process.env.PORT;

await mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@urlshortner.uwmkrzq.mongodb.net/`);   //connection made
console.log("CONNECTED TO DB");

app.use(bodyparser.json())
app.use('/',shortnerApi)

app.listen(port,()=>{
        console.log(`server listening on port ${port}`);
})