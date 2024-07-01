import express from 'express'
import { fetchLectures, getAllCourses, getMyCourses, getSingleCourse, getSingleLecture } from '../controller/courses.js';
import { isAuth } from '../middleware/isAuth.js';
const router = express.Router();

router.get('/all', getAllCourses);
router.get('/mycourse', isAuth ,getMyCourses)
router.get('/:id', getSingleCourse);
router.get('/lectures/:id',isAuth, fetchLectures)
router.get('/lecture/:id',isAuth, getSingleLecture)

export default router;