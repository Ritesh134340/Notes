import  "../../../helper/config/db"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import User from "@/helper/models/user.model"

export default async function handler (req, res){
  const {name,email,password}=req.body
  try{
     const check=await User.findOne({email:email})
     if(check){
        res.status(409).json({mesg:"User already exists, please signup !"})
     }
     else{
      bcrypt.hash(password, 5, async function(err, hash) {
        if(err){
         res.status(500).json({mesg:"Something went wrong, try later !"})
        }
        if(hash){
            const userObj= {
             name:name,
             email:email,
             password:hash
            }

            const newUser=new  User(userObj)
            await newUser.save();

            const createdUser=await User.findOne({email:email});
            var token = jwt.sign({ email:createdUser.email,id:createdUser._id }, process.env.NEXT_PUBLIC_SECRET_KEY);
            const profile={
              name:createdUser.name,
              email:createdUser.email
            }

            res.status(200).json({mesg:"Sign up successful !",token:token,profile:profile})
        }
     });
     }
  }
  catch(err){
    console.log("Error in signup user :",err)
    res.status(500).json("Internal server error !")
  }
  
}
