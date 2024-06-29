import express from 'express'
import { fetchLectures, getAllCourses, getSingleCourse } from '../controller/courses.js';
import { isAuth } from '../middleware/isAuth.js';
const router = express.Router();

router.get('/all', getAllCourses);
router.get('/:id', getSingleCourse);
router.get('/lectures/:id',isAuth, fetchLectures)


export default router;