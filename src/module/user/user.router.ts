import { Router } from 'express'
import { userController } from './user.controller'
import auth from '../../middlewares/auth'


const userRouter = Router()

userRouter.get('/', auth("teacher"),userController.getUser)

export default userRouter 