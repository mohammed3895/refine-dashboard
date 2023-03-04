import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
    category: { type: 'string', require: true },
    title: { type: 'string', require: true },
    level: { type: 'string', require: true },
    description: { type: 'string', require: true },
    photo: { type: 'string', required: true },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

const CourseModel = mongoose.model('Course', CourseSchema)

export default CourseModel