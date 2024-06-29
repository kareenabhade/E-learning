import { Courses } from "../models/Courses.js"
import { Lecture } from "../models/Lecture.js";
import { User } from "../models/user.js";

export const getAllCourses = async(req,res)=>{
    try {
        const allCourses = await Courses.find();
        res.json({
            allCourses
        })
    } catch (error) {
        res.send({
            message:error
        })
    }
}

export const getSingleCourse = async(req, res)=>{
    try {
        const singleCourse = await Courses.findById(req.params.id)
        res.json({
            singleCourse
        })
        
    } catch (error) {
         res.send({
            message:error
        })
    }
}

export const fetchLectures = async(req, res)=>{
    try {
        const lectures = await Lecture.find({course:req.params.id});
        const user = await User.findById(req.user._id);
        
        if(user.role === 'admin') return res.json({lectures});

        if(!user.subscription.includes(req.params.id)){
            return res.status(400).json({message:"You have not subscribed to this course"})
        }

        res.json({
            lectures
        })
        
    } catch (error) {
         res.send({
            message:error
        })
    }
}

export const getSingleLecture = async (req, res)=>{
    try {
        const lecture = await Lecture.findById(req.params.id);
        const user = await User.findById(req.user._id);
        
        if(user.role === 'admin') return res.json({lecture});

        if(!user.subscription.includes(req.params.id)){
            return res.status(400).json({message:"You can not access this lecture"})
        }

        res.json({
            lecture
        })
        
    } catch (error) {
         res.send({
            message:error
        })
    }
}