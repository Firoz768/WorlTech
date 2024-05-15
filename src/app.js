const express = require("express");
const path = require("path");
require("./db/conn");
const User = require("./models/usermessage");
const { error } = require("console");

const app = express();
const port = process.env.PORT || 3000;

const staticpath =  path.join(__dirname,"../public");

app.use("/css", express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")))
app.use("/js", express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")))
app.use("/jq", express.static(path.join(__dirname,"../node_modules/jquery/dist")))
app.use(express.urlencoded({extended:false}))
app.use(express.static(staticpath))
app.set("view engine","hbs");
app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/Contact",(req,res)=>{
    res.render("Contact");
})
app.post("/Contact",async(req,res)=>{
    try{
        // res.send(req.body)
        const userData  = new User(req.body)
        await userData.save();
        res.status(201).render("index")

    }
    catch(res){
        res.status(500).send(error)
    }
});

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})