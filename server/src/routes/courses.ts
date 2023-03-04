import express from "express";
import { createCourse, getAllCourses, getCourseById } from "../controllers/Courses.controller";

const router = express.Router()

router.route('/').get(getAllCourses)
router.route('/:id').get(getCourseById)
router.route('/').post(createCourse)

export default router