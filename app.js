import express from "express";

import bodyParser from "body-parser";

import connect from "./mongo/connect";

const app = express();

app.set("views","./html/pug");
app.set("view engine", 'pug');

// app.set("views","./html/ejs");
// app.set("view engine", 'ejs');


//app.use(express.static(__dirname+'/html'));

app.use(bodyParser.urlencoded({extended:false}))
//app.use(express.json());

export default app;