import "../../../helper/config/db"
import Note from "@/helper/models/notes.model"



export default async function  handler(req, res){

  try{
    const notes=await Note.find({})
    res.status(200).json({notes:notes })
  }
  catch(err){
    console.log("Error in get notes :",err)
   res.status(500).json({mesg:"Something went wrong !"})
  }
  
}