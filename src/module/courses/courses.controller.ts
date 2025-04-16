import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { CourseService } from './course.service';
import sendResponse from '../../utils/sendResponse';

const createCourse = catchAsync(async (req: Request, res: Response) => {
    const courseData = req.body;

    const result = await CourseService.createTour(courseData);
    // Sending a successful response
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        status: true,
        message: 'Course created successfully',
        data: result,
    });
});

export default {
    createCourse,
};
