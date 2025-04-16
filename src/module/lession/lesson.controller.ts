import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { lessonService } from './lesson.service';

export const lessonController = {
  createLesson: catchAsync(async (req: Request, res: Response) => {
    const result = await lessonService.createLesson(req.body);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      status: true,
      message: 'Lesson created successfully',
      data: result,
    });
  }),

  getAllLessons: catchAsync(async (_req: Request, res: Response) => {
    const result = await lessonService.getAllLessons();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      status: true,
      message: 'Lessons retrieved successfully',
      data: result,
    });
  }),


};
