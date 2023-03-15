import { model, models, Schema } from "mongoose";

const PostSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    tags:{
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: true,
    },
    preview:{
        type: String,
        required: true,
    },
    slug:{
        type: String,
        required: true,
    },
    content:{
        type: String,
        required: true,
    },
} , { timestamps: true})

module.exports = models.Posts || model('Posts', PostSchema)