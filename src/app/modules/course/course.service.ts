import type { ICourse, ILesson } from "./course.interface.js"
import { Course, Lesson } from "./course.model.js"

const createCourse = async (payload: ICourse, adminId: string) => {
    const courseData = {
        ...payload,
        createdBy: adminId
    }
    const course = await Course.create(courseData)
    return course

}

const getAllCourses = async () => {

    const courses = await Course.find().populate("syllabus")
    return courses

}


const getCourseById = async (courseId: string) => {

    const course = await Course.find({_id: courseId}).populate("syllabus")
    return course

}



const createLesson = async (payload: ILesson, courseId: string) => {

    const lesson = await Lesson.create({ ...payload, courseId })
    await Course.findByIdAndUpdate(
        courseId,
        { $push: { syllabus: lesson._id } },
        { new: true }
    );

    return lesson

}






export const courseServices = {
    createLesson,
    getAllCourses,
    createCourse,
    getCourseById
}