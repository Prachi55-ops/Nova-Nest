import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import { connect } from 'node:http2';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
dotenv.config()


//App Config 

const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()


//Middlewares

app.use(express.json())
app.use (cors())

//API endpoints
app.use('/api/user',userRouter)
app.use ('/api/product',productRouter)


app.get('/', ( req,res)=>{
     res.send("API Working")
})

app.listen(port,()=>console.log('server started on PORT : '+port))