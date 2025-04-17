/* eslint-disable @typescript-eslint/no-explicit-any */
import Course from "../courses/courses.model";
import Lesson from "./lesson.model";

const createLesson = async (payload: any) => {
    const lesson = await Lesson.create(payload);

    if (payload.courseId) {
        const course = await Course.findById(payload.courseId);
        if (course?.lessons) {
            course.lessons.push(lesson._id);
            await course.save();
        }
    }

    return lesson;
};

const getAllLessons = async () => {
    const result = await Lesson.find().populate('courseId');
    return result;
};


const updateLesson = async (id: string, payload: any) => {
    const result = await Lesson.findByIdAndUpdate(id, payload, { new: true });
    return result;
};

const deleteLesson = async (id: string) => {
    const result = await Lesson.findByIdAndDelete(id);
    return result;
};


export const lessonService = {
    createLesson,
    getAllLessons,
    updateLesson,
    deleteLesson
};
