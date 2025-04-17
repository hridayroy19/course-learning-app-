/* eslint-disable @typescript-eslint/no-explicit-any */
import Course from "../courses/courses.model";
import Topic from "./topic.model";

const createTopic = async (payload: any) => {
    const topic = await Topic.create(payload);
    if (payload.courseId) {
        const course = await Course.findById(payload.courseId);
        if (course?.topics) {
            course.topics.push(topic._id);
            await course.save();
        }
    }

    return topic;
};

const getAllTopics = async () => {
    const result = await Topic.find().populate('lessonId');
    return result;
};

export const topicService = {
    createTopic,
    getAllTopics,
};
