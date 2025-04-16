import { Router } from "express";
import coursesController from "./courses.controller";

const coursesRoute = Router()

coursesRoute.post("/create", coursesController.createCourse)

export default coursesRoute