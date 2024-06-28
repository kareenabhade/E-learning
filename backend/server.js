import express from 'express'
import dotenv from 'dotenv'
import {connectDB} from './database/db.js'
import userRoutes from './routes/user.js'

dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json())

app.use('/api/user', userRoutes);

app.listen(PORT,()=>{
    console.log(`server started at port : ${PORT} `)
    connectDB()
})