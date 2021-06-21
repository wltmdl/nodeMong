import bodyParser from "body-parser";
import express from "express";

import appRouter from "./app";
import { add } from "./html/controller";

const app = express();

const PORT = process.env.port || 5000;

//app.use(express.static(__dirname+'/html'));
app.use(bodyParser.urlencoded({extended:false}))
//app.use(express.json());

app.get('/', (req,res)=>{res.status(200).set("Content-Type","text/html").sendFile(__dirname+'/html'+"/home.html")});
app.post('/add', add);

app.listen(PORT,()=>{console.log("express start!")});
