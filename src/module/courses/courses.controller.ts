import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { courseService } from './course.service';



const createCourse = catchAsync(async (req: Request, res: Response) => {
    const result = await courseService.createCourse(req.body);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        status: true,
        message: 'Course created successfully',
        data: result,
    });
})

const getAllCourses = catchAsync(async (_req: Request, res: Response) => {
    const result = await courseService.getAllCourses();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        status: true,
        message: 'Courses retrieved successfully',
        data: result,
    });
})




export const courseController = {
    createCourse,
    getAllCourses,



}