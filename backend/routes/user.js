import express from 'express'
import { loginUser, myProfile, register, verifyUser } from '../controller/user.js';
import { isAuth } from '../middleware/isAuth.js';
const router = express.Router();

router.post('/register',register)
router.post('/verify', verifyUser)
router.post('/login', loginUser)
router.get('/me', isAuth, myProfile)

export default router;