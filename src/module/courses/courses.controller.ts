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

// student like course
const likeCourse = catchAsync(async (req, res) => {
    const { courseId } = req.params;
    const { studentId } = req.body;
    const result = await courseService.likeCourse(courseId, studentId);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      message: 'Course liked successfully',
      data: result
    });
  });

// student feedback course
  const submitFeedback = catchAsync(async (req: Request, res: Response) => {
    const { courseId } = req.params;
    const { studentId, comment } = req.body;
  
    const result = await courseService.submitFeedback(courseId, studentId, comment);
  
    sendResponse(res, {
      status: true,
      statusCode: httpStatus.OK,
      message: 'Feedback submitted successfully',
      data: result,
    });
  });

export const courseController = {
    createCourse,
    getAllCourses,
    likeCourse,
    submitFeedback



}