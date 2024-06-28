import express from 'express'
import { register, verifyUser } from '../controller/user.js';
const router = express.Router();

router.post('/register',register)
router.post('/verify', verifyUser)

export default router;