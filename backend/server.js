import express from 'express'
import dotenv from 'dotenv'
import {connectDB} from './database/db.js'
import userRoutes from './routes/user.js'
import coursesRoutes from './routes/courses.js'
import adminRoutes from './routes/admin.js'
import cors from 'cors'

const corsOptions = {
  origin: 'http://localhost:3000', 
};

dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000

app.use(cors(corsOptions ));
app.use(express.json())
app.use("/uploads", express.static('uploads'));

app.use('/api/user', userRoutes);
app.use('/api/courses', coursesRoutes);
app.use('/api/admin', adminRoutes);

app.listen(PORT,()=>{
    console.log(`server started at port : ${PORT} `)
    connectDB()
})