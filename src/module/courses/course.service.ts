import Course, { ICourse } from "./courses.model";

const createTour = async (payload: ICourse) => {
    const data = new Course(payload)
    const result = await data.save()
    return result
}


export const CourseService = {
    createTour
};
