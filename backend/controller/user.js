import {User} from "../models/user.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import sendMail from "../middleware/sendMail.js";

export const register = async(req,res)=>{
    try {
        const {name, email, password} = req.body;

        let user =await User.findOne({email});
        if(user){
           return res.status(400).json({message:"User already registered"})
        }

        const hashPassword = await bcryptjs.hash(password, 10);

        user = { name, email, password: hashPassword };

        const otp = Math.floor(Math.random()*100000)
        const activationToken = jwt.sign({
            user,
            otp,
        },
        process.env.Activation_Secret,
        {
            expiresIn:'5m'
        } )

        const data = {name, otp,};
        await sendMail(email, "E-learning", data);
        res.status(200).json({
            message:'otp sent to your mail',
            activationToken
        })
      
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const verifyUser = async(req,res)=>{
    try {
        const {otp, activationToken} = req.body;
        const verify = jwt.verify(activationToken, process.env.Activation_Secret);

        if(!verify) return res.status(400).json({message:"otp expired"})
        if(verify.otp !== otp) return res.status(400).json({message:'Wrong otp'})

        await User.create({
            name: verify.user.name,
            email: verify.user.email,
            password: verify.user.password,
        })
    
        res.json({
            message:'user registered'
        })

    } catch (error) {
         res.status(500).json({
            message: error.message
        })
    }
}


export const loginUser = async(req,res)=>{
    try {
        const {email, password} = req.body
        const user = await User.findOne({email})

        if(!user) return res.status(400).json({message:'User not registered'});

        const matchPassword = await bcryptjs.compare(password, user.password);
        if(!matchPassword) return res.status(400).json({message:"wrong password"});

        const token = await jwt.sign({_id: user._id}, process.env.JWT_SECRET,{ expiresIn:'30d'});

        res.status(200).json({
            message:`Welcome back ${user.name}`, 
            token,
            user
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        }) 
    }
}


export const myProfile = async(req,res)=>{
    try {
        const user = await User.findById(req.user._id)

        res.json({user})
    } catch (error) {
         res.status(500).json({
            message: error.message
        }) 
    }
}