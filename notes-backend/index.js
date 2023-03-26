require("dotenv").config()

const express=require("express")
const cors = require('cors')
const connection=require("./config/db")


const app=express();
const PORT=process.env.PORT
 
app.use(cors())
app.use(express.json())



app.get("/",(req,res)=>{
    res.status(200).send("Welcome to Notes !")
})




app.listen(PORT,async()=>{
    try{
        await connection
        console.log("Database connection successful !")
    }
    catch(err){
     console.log("Could not connect to database error is :",err)
    }
    
    console.log("Express is running on PORT",PORT)
})

