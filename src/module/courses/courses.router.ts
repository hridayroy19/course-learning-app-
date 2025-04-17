import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { createCourseSchema, updateCourseSchema, } from './course.validation';
import { courseController } from './courses.controller';
import auth from '../../middlewares/auth';

const courserouter = express.Router();
// crud oparation>>
courserouter.post('/create', auth("teacher"), validateRequest(createCourseSchema), courseController.createCourse);
courserouter.get('/', courseController.getAllCourses);
courserouter.get('/:id', courseController.getSingleCourse);
courserouter.delete('/:id', courseController.deleteCourse);
courserouter.patch('/:id', validateRequest(updateCourseSchema), courseController.updateCourse);

courserouter.post('/like:courseId', courseController.likeCourse);
courserouter.post('/feedback/:courseId', courseController.submitFeedback);
courserouter.post('/follow/:courseId', courseController.followCourse);
courserouter.post('/enroll/:courseId', auth("student"), courseController.enrollCourseController);
export default courserouter;
