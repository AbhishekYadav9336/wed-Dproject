const express=require("express");
const app=express();
const hbs=require("hbs");
const requests=require("requests");
const path=require("path");
const port=process.env.PORT || 8000;// process.env.PORT---for get the real port no. by hosting this project other than local and if not host then it will use 8000
 const temp_path=path.join(__dirname,"../templates/views");
 const partials_path=path.join(__dirname,"../templates/partials");
 const temp=path.join(__dirname,"../public");
app.set("view engine","hbs");
app.set("views",temp_path);
hbs.registerPartials(partials_path);
app.use(express.static(temp));

// routing
app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/about",(req,res)=>{
    res.render("about");
})
app.get("/weather",(req,res)=>{
    res.render("weather");
})
app.get("*",(req,res)=>{
    res.render("404err");
})
app.listen(port,()=>{
   console.log(`listening to the port ${port}`);
})
