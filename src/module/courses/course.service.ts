/* eslint-disable @typescript-eslint/no-explicit-any */
import Course from "./courses.model";

const createCourse = async (payload: any) => {
    const result = await Course.create(payload);
    return result;
};

const getAllCourses = async () => {
    const result = await Course.find();
    return result;
};



export const courseService = {
    createCourse,
    getAllCourses,

};
