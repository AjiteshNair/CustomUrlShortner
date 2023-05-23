import mongoose from "mongoose";

const schema = new mongoose.Schema({
    longUrl : String,
    shortUrl : String
})

export default mongoose.model("custom",schema);