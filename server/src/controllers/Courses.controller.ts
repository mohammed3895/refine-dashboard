import express from "express";
import CourseModel from "../models/Courses";
import mongoose from "mongoose";
import UserModel from "../models/Users";
import dotenv from 'dotenv'
import { v2 as cloudinary } from 'cloudinary'

dotenv.config()
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const getAllCourses = async (req: express.Request, res: express.Response) => {
    try {
        const data = await CourseModel.find({})
        res.status(200).json(data)
    } catch (e) {
        res.status(500).json(e)
    }
}

const createCourse = async (req: express.Request, res: express.Response) => {
    const { category, title, level, description, photo, email } = req.body
        try {
            const session = await mongoose.startSession();
            session.startTransaction()

            const user = await UserModel.findOne({ email }).session(session)

            if(!user) throw new Error ('User is not Found')
            
            const photoUrl = await cloudinary.uploader.upload(photo)

            const newCourse = await CourseModel.create({ 
                title, 
                category, 
                level, 
                description, 
                photo: photoUrl.url,
                creator: user._id
            })

            user.courses.push(newCourse._id)
            await user.save({ session })
            await session.commitTransaction()

            res.status(200).json({ message: "Course Created Successfully" })
        } catch (e) {
            res.status(500).json(e)
        }
}

const getCourseById = async (req: express.Request, res: express.Response) => {
    const id = req.body._id
    try {
        const data = await CourseModel.findById(id)
        res.status(200).json(data)
    } catch (e) {
        res.status(500).json(e)
    }
}

export { getAllCourses, getCourseById, createCourse }