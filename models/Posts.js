import { model, models, Schema } from "mongoose";

const PostSchema = new Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    tags: { type: [String], index: true },
    publishedDate: { type: Date, default: Date.now },
    author: { type: String, required: true }
})

module.exports = models.Posts || model('Posts', PostSchema)