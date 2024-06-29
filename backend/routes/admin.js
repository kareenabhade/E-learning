import express from 'express'
import { isAdmin, isAuth } from '../middleware/isAuth.js';
import { uploadFiles } from '../middleware/multer.js';
import { addLectures, createCourse, deleteCourse, deleteLecture, getAllStats } from '../controller/admin.js';
const router = express.Router();

router.post('/course/new',isAuth, isAdmin,uploadFiles, createCourse )
router.post('/course/:id', isAuth, isAdmin, uploadFiles, addLectures)
router.delete('/lecture/:id',isAuth, isAdmin, deleteLecture)
router.delete('/course/:id',isAuth, isAdmin, deleteCourse)
router.get('/stats/all', isAuth , isAdmin, getAllStats)

export default router;