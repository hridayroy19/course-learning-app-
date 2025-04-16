/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { courseService, followCourseService } from './course.service';



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


// follow a course
 const followCourse = catchAsync(async (req: Request, res: Response) => {
    const { courseId } = req.params;
    const { userId } = req.body; // User ID Body থেকে নিতে হবে
  
    const result = await followCourseService(courseId, userId);
  
    sendResponse(res, {
      statusCode: 200,
      message: 'Course followed successfully',
      data: result,
    });
  });


// studnet enroll couse 
 const enrollCourseController = async (req: Request, res: Response) => {
    try {
        const { courseId, userId } = req.body;
  
      const result = await courseService.enrollCourseService(courseId, userId);
  
      res.status(httpStatus.OK).json({
        success: true,
        message: 'Enrolled successfully!',
        data: result,
      });
    } catch (err: any) {
      res.status(httpStatus.BAD_REQUEST).json({
        success: false,
        message: err.message,
      });
    }
  };





export const courseController = {
    createCourse,
    getAllCourses,
    likeCourse,
    submitFeedback,
    followCourse,
    enrollCourseController
}