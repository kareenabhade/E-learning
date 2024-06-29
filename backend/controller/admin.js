import { Courses } from "../models/Courses.js";
import { Lecture } from "../models/Lecture.js";

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
        const lecture = Lecture.create({
            title, 
            description,
            video:file?.path,
            course: course._id,
        })

        res.status(201).json({
            message:"Lecture Added",
            lecture
        })
        
    } catch (error) {
        res.send({
            message: error
        })
    }
}