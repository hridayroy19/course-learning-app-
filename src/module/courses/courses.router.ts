import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { createCourseSchema, } from './course.validation';
import { courseController } from './courses.controller';
import auth from '../../middlewares/auth';

const courserouter = express.Router();

courserouter.post('/create', auth("teacher"), validateRequest(createCourseSchema), courseController.createCourse);
courserouter.get('/', courseController.getAllCourses);


export default courserouter;
