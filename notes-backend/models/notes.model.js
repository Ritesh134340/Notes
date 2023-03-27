const mongoose=require("mongoose");

const noteSchema=new mongoose.Schema({
 title:{type:String,required:true},
 discription:{type:String},
 userId:{type:String}
},{timestamps:true})

const Note=mongoose.model("note",noteSchema)

module.exports=Note;