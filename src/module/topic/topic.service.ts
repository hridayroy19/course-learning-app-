/* eslint-disable @typescript-eslint/no-explicit-any */
import Topic from "./topic.model";

const createTopic = async (payload: any) => {
    const result = await Topic.create(payload);
    return result;
};

const getAllTopics = async () => {
    const result = await Topic.find().populate('lessonId');
    return result;
};



export const topicService = {
    createTopic,
    getAllTopics,
};
