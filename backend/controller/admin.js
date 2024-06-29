import { log } from "console";
import { Courses } from "../models/Courses.js";
import { Lecture } from "../models/Lecture.js";
import fs, { rm } from 'fs';
import { promisify } from "util";
import { User } from "../models/user.js";


export const createCourse = async(req, res)=>{
    try {
        const {title, description, category, createdBy, duration, price} = req.body;
        const image = req.file;

        await Courses.create({
            title, description, category, createdBy, image:image?.path, duration, price,
        });

        res.status(201).json({
            message:"Course created successfully"
        })
    } catch (error) {
        res.send({
            message: error
        })
    }
}

export const addLectures = async(req, res)=>{
    try {
        const course = await Courses.findById(req.params.id);

        if(!course) return res.status(400).json({message:'No Course with this id'});

        const {title, description} = req.body;
        const file = req.file;
        const lecture =await Lecture.create({
            title, 
            description,
            video:file?.path,
            course: course._id,
        })

        res.status(201).json({
            message:"Lecture Added",
            lecture: lecture
        })
        
    } catch (error) {
        res.send({
            message: error
        })
    }
}


export const deleteLecture = async (req, res) => {
    try {
        const lecture = await Lecture.findById(req.params.id);

        if (!lecture) {
            return res.status(404).json({ message: "Lecture not found" });
        }

        fs.unlink(lecture.video, (err) => {
            if (err) {
                return res.status(500).json({ message: "Error deleting video file", error: err });
            }
            console.log('Video deleted');
        });

        await lecture.deleteOne();

        res.json({
            message: "Lecture deleted"
        });

    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};


const unlinkAsync = promisify(fs.unlink);

export const deleteCourse = async(req,res)=>{
    try {
        const course = await Courses.findById(req.params.id);
         if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }

        const lectures = await Lecture.find({course:course._id})

        await Promise.all(
            lectures.map(async(lecture)=>{
                await unlinkAsync(lecture.video);
                console.log('video deleted from course')
            })
        )

        rm(course.image, ()=>{
            console.log('image deleted of course')
        })

        await Lecture.find({course: req.params.id}).deleteMany();
        await course.deleteOne();
        await User.updateMany({},{$pull:{ subscription: req.params.id}});

        res.json({
            message:"Courses deleted succesfully"
        })
        
    } catch (error) {
         res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
}


export const getAllStats = async(req,res)=>{
    try {
        const totalCourses = (await Courses.find()).length;
        const totalLectures = (await Lecture.find()).length;
        const totalUsers = (await User.find()).length;
        
        const stats = {
            totalCourses,
            totalLectures,
            totalUsers,
        }

        res.json({stats})
    } catch (error) {
         res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
}