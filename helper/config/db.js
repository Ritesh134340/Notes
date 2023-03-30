import mongoose from "mongoose";

 async function  connection(){
    try{
        await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URL,{dbName:"Notes"})
        console.log("Database connection successful !")
    }
    catch(err){
        console.log("Couldn't connect to database !",err)
    }
 
}

connection()

export default mongoose.connection;