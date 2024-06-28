import { Courses } from "../models/Courses.js";

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