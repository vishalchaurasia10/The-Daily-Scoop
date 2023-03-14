import mongoose from "mongoose";

const mongooseURI = process.env.MONGODB_URI;

mongoose.set('strictQuery', true)

const connectToMongo = () => {
    mongoose.connect(mongooseURI,()=>{
        console.log('connected to mongoDB')
    })
}

module.exports = connectToMongo