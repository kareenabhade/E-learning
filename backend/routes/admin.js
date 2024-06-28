import express from 'express'
import { isAdmin, isAuth } from '../middleware/isAuth.js';
import { uploadFiles } from '../middleware/multer.js';
import { createCourse } from '../controller/admin.js';
const router = express.Router();

router.post('/course/new',isAuth, isAdmin,uploadFiles, createCourse )

export default router;