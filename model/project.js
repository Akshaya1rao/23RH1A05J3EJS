const mongoose=require('mongoose');
const ProjectSchema=new mongoose.Schema({
    taskname:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        default:false
    }
});
module.exports=mongoose.model("Project",ProjectSchema);