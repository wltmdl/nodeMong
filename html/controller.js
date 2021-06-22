import { async } from "regenerator-runtime";
import imageModel from "../mongo/imageModel"

export const add=async (req,res)=>{
    //res.local.theTitle = req.body.title;
    //const theTitle= "ss";
    //res.sendFile("/list.html",{ root: __dirname});

    /*
    const i=[];
    i.push(req.body);
    res.render("list",{theList:i})
    */
   
    const i = new imageModel({
        title:req.body.title,
        description: "Not yet"
    });
    i.save((err)=>{if(err) console.log(err)});

    const theList= await imageModel.find();
    res.render("list",{theList})
}
export const see_list=async (req,res)=>{
    const theList= await imageModel.find();
    res.render("list",{theList})
}

export const removeAll= async(req,res)=>{
    const check=await imageModel.find();
    if (check) await imageModel.deleteMany({});
    res.render("list",{theList:[]});
}

export const search= async (req,res)=>{
    const x = req.query.search;
    let i = [];
    await imageModel.findOne({title:x},(err,doc)=>{ if(doc) i.push(doc)});
    res.render("list",{theList:i})
}