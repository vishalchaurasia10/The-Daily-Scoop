import mongoose from "mongoose";

const mongooseURI = "mongodb+srv://vishalchaurasia10:time_to_do_blogging@blogsinfo.pvppisz.mongodb.net/?retryWrites=true&w=majority";

mongoose.set('strictQuery', true)

const connectToMongo = () => {
    mongoose.connect(mongooseURI,()=>{
        console.log('connected to mongoDB')
    })
}

module.exports = connectToMongo