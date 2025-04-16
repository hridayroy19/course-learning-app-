import { Request, Response } from 'express';
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { topicService } from './topic.service';


const createTopic = catchAsync(async (req: Request, res: Response) => {
    const result = await topicService.createTopic(req.body);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        status: true,
        message: 'Topic created successfully',
        data: result
    });
})

const getAllTopics = catchAsync(async (_req: Request, res: Response) => {
    const result = await topicService.getAllTopics();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        status: true,
        message: 'Topics retrieved successfully',
        data: result
    });
})

export const TopicController = {
    createTopic,
    getAllTopics
}
