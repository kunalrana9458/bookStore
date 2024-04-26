import User from "../models/user.models.js";
import bcrypt from "bcrypt"

export const signup = async (req,res) => {
    try{
        const{fullname,email,password} = req.body;
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({message:"User Already Exist"})
        } 
        const hashedPassword = await bcrypt.hash(password,10)
        const createNewUser = await User.create({
            fullname,email,password:hashedPassword
        });
        res.status(200).json({message:"User Created Successfully",user:{
            _id:createNewUser._id,
            fullname:createNewUser.fullname,
            email:createNewUser.email
        }})
    }catch(err){
        console.log("Error:",err.message);
        res.status(500).json({message:"Internal Server Error"})
    }
}

export const login = async (req,res) => {
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user) return res.status(400).json({message:"User Not Exist"});

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch) return res.status(400).json({message:"Wrong Password"});

        res.status(200).json({
            message:"Login Successfull",
            user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email
            }
        })
    } catch(err){
        console.log("Error:",err.message);
        res.status(500).json({message:"Internal Server Error"})
    }
}