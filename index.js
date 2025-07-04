const express=require('express');
const mongoose=require('mongoose');
const Project=require('./model/project');
const app=express();
//mongodb://localhost:27017/TodoDB
mongoose.connect("mongodb://localhost:27017/ProjectDB",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log("connection established")}
).catch(err=>console.log("error occured",err));
app.use(express.json());
//localhost:5000/dbfetchtodo
app.get("/dbfetchproject",(req,res)=>{
    const task=await Todo.find();
    res.json(task);
});
app.post("/dbaddproject",(req,res)=>{
    const newTask=new Project({taskname:req.body.taskname});
    newTask.save();
    res.send(newTask);
});
app.listen(5000,function(){
    console.log("port listening on 5000");
});