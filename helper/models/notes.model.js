import mongoose from "mongoose";

const noteSchema=new mongoose.Schema({
    userId:[String],
    title:{type:String,required:true},
    discription:{type:String}
},{timestamps:true})

const Note=mongoose.model("note",noteSchema)

mongoose.models={}

export default Note;