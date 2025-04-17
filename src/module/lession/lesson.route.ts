import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { createLessonSchema, updateLessonSchema } from "./lesson.validation";
import auth from "../../middlewares/auth";
import { lessonControler } from "./lesson.controller";


const lessionrouter = Router();

lessionrouter.post('/', auth("teacher"), validateRequest(createLessonSchema), lessonControler.createLesson);

lessionrouter.get('/', lessonControler.getAllLessons);

lessionrouter.patch('/:id', auth("teacher"), validateRequest(updateLessonSchema), lessonControler.updateLesson);

lessionrouter.delete('/:id', auth("teacher"), lessonControler.deleteLesson);

export default lessionrouter;
