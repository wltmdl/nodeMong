import appRouter from "./app";
import { add, removeAll, search, see_list } from "./html/controller";

//app.get('/', (req,res)=>{res.status(200).set("Content-Type","text/html").sendFile(__dirname+'/html'+"/home.html")});

appRouter.get('/', (req,res)=>{res.render("home")});

appRouter.get('/remove', removeAll);

appRouter.get('/search',search)

appRouter.route('/add').post(add).get(see_list);

const PORT = process.env.port || 5000;
appRouter.listen(PORT,()=>{console.log("express start!")});
