import type { ICourse, ILesson } from "./course.interface.js"
import { Course, Lesson } from "./course.model.js"

const createCourse = async (payload: ICourse, instructorId: string) => {
    const courseData = {
        ...payload,
        createdBy: instructorId
    }
    const course = await Course.create(courseData)
    return course

}

const getAllCourses = async () => {

    const courses = await Course.find().populate("syllabus")
    return courses

}

const getInstructorCourses = async (instructorId: string) => {
    const courses = await Course.find({ createdBy: instructorId }).populate("syllabus");
    return courses;
}


const getCourseById = async (courseId: string) => {

    const course = await Course.find({_id: courseId}).populate("syllabus")
    return course

}









export const courseServices = {
    getAllCourses,
    createCourse,
    getCourseById,
    getInstructorCourses
}