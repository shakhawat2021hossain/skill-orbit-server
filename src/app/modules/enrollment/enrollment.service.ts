import { Course } from "../course/course.model.js"
import { Enrollment } from "./enrollment.model.js"

const enroll = async (courseId: string, userId: string) => {
    const enrollment = await Enrollment.create({
        studentId: userId,
        courseId
    })

    await Course.findByIdAndUpdate(
        courseId,
        { $addToSet: { students: userId } },
        { new: true }
    )

    return enrollment

}

export const enrollmentServices = {
    enroll
}