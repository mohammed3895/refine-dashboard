import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: 'string', require: true },
    email: { type: 'string', require: true },
    avatar: { type: 'string', require: true },
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
})

const UserModel = mongoose.model('User', UserSchema)

export default UserModel