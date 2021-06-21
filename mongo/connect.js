import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/image",
    { useNewUrlParser:true, useUnifiedTopology:true});

mongoose.connection.on("error",(err)=>{console.log(err)});
mongoose.connection.once("open",()=>{console.log("mongodb start!")});
