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