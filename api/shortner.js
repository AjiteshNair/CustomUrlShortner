import express from "express";
import checker from "valid-url";
import mongoose from "mongoose";
import custom  from "../model/model.js"

const shortner = express.Router();

shortner.post('/post',async (req,res)=>{
    console.log(req.body)
    let {longUrl} = req.body,
        {shortUrl} = req.body;
    
    const baseUrl = "http://localhost:3000"

    

    let temp = await custom.findOne({'longUrl':longUrl}||{'shortUrl':shortUrl})
    

    if(temp)
        return res.sendStatus(200)//.json(temp);

    else{
        
        temp = new custom({     // model keys and these keys should have the same name
            longUrl,
            shortUrl
        })
        await temp.save();
        return res.sendStatus(201)//.json(temp);

    }
})

export default shortner;



