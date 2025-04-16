/* eslint-disable @typescript-eslint/no-explicit-any */
import Lesson from "./lesson.model";

const createLesson = async (payload: any) => {
    const result = await Lesson.create(payload);
    return result;
};

const getAllLessons = async () => {
    const result = await Lesson.find().populate('courseId');
    return result;
};



export const lessonService = {
    createLesson,
    getAllLessons,
};
