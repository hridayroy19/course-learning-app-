import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { createLessonSchema } from "./lesson.validation";
import { lessonController } from "./lesson.controller";
import auth from "../../middlewares/auth";


const lessionrouter = Router();

lessionrouter.post('/', auth("teacher"), validateRequest(createLessonSchema), lessonController.createLesson);
lessionrouter.get('/', lessonController.getAllLessons);


export default lessionrouter;
