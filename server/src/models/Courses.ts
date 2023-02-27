import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
    category: { type: 'string', require: true },
    title: { type: 'string', require: true },
    level: { type: 'string', require: true },
    progress: { type: 'number', require: true, default: 0 },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

const CourseModel = mongoose.model('Course', CourseSchema)

export default CourseModel