
export const add=(req,res)=>{
    //res.local.theTitle = req.body.title;
    //const theTitle= "ss";
    res.sendFile("/list.html",{ root: __dirname});
}