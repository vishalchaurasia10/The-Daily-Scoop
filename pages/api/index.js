const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postsRoute = require('./routes/posts')
const categoryRoute = require('./routes/categories')
const multer = require('multer')

dotenv.config()
app.use(express.json())

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL).then(console.log('Connected to mongodb')).catch(err=>console.log(err))

const storage = multer.diskStorage({
    destination : (req,file,cb) => {
        cb(null,"images");
    },
    filename : (req,file,cb) => {
        cb(null,'flower.jpg')
    }
})

const upload = multer({storage : storage})

app.post('/api/upload',upload.single("file"),(req,res)=>{
    res.status(200).json("File has been uploaded")
})

app.use('/api/auth',authRoute)
app.use('/api/users',userRoute)
app.use('/api/posts',postsRoute)
app.use('/api/categories',categoryRoute)

app.listen(5000,()=>{
    console.log("backend is running") 
})