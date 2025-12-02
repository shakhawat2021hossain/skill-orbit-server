import type { ICourse, ILesson } from "./course.interface.js"
import { Course } from "./course.model.js"

const createCourse = async (payload: ICourse, adminId: string) => {
    const courseData ={
        ...payload,
        createdBy: adminId
    }
    const course = await Course.create(courseData)
    return course

}


const addLesson = async (payload: ILesson) => {
    return payload

}




export const courseServices = {
    addLesson,
    createCourse
}