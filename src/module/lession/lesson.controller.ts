import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { lessonService } from './lesson.service';


 const createLesson = catchAsync(async (req: Request, res: Response) => {
    const result = await lessonService.createLesson(req.body);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      status: true,
      message: 'Lesson created successfully',
      data: result,
    });
  })

  const  getAllLessons = catchAsync(async (_req: Request, res: Response) => {
    const result = await lessonService.getAllLessons();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      status: true,
      message: 'Lessons retrieved successfully',
      data: result,
    });
  })


 const updateLesson = catchAsync(async (req: Request, res: Response) => {
  const result = await lessonService.updateLesson(req.params.id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    status: true,
    message: 'Lesson updated successfully',
    data: result,
  });
})

const deleteLesson = catchAsync(async (req: Request, res: Response) => {
  const result = await lessonService.deleteLesson(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    status: true,
    message: 'Lesson deleted successfully',
    data: result,
  });
})

export const lessonControler = {
  createLesson,
  getAllLessons,
  updateLesson,
  deleteLesson
}