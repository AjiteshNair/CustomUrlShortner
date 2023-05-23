import express from "express";
import checker from "valid-url";
import mongoose from "mongoose";
import custom  from "../model/model.js"

const shortner = express.Router();

shortner.post('/post',async (req,res)=>{
    console.log(req.body)
    let {longUrl} = req.body,
        {shortUrl} = req.body;
    
    //shortUrl = "http://localhost:3000/"+shortUrl;

    

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

shortner.get("/:customUrl",async(req,res)=>{
    let customUrl = req.params.customUrl;
    console.log(customUrl)
    let newlink = await custom.findOne({"shortUrl":customUrl});
    console.log("aaaaaaaaaaaaaaaaaaaaa",newlink.longUrl,"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    res.redirect(newlink.longUrl);
})


// shortUrlRoute.get("/:shorturl", async (req,res)=>{
//     console.log(" WORKING AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
//     let shorturl = req.params.shorturl;                                         //read params, all req and res usage
//     let newurl = await Url.findOne({ "urlCode": shorturl });
//     console.log(newurl,"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
//     res.redirect(newurl.longUrl)
// })


export default shortner;



