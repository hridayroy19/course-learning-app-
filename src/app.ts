/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from 'http-status'
import express, { NextFunction, Request, Response } from 'express'
import authRoute from './module/auth/auth.route'
import cors from 'cors'
import userRouter from './module/user/user.router'
import { globalErrorHandler } from './middlewares/globalErrorHandler'
import courserouter from './module/courses/courses.router'
import lessionrouter from './module/lession/lesson.route'

const app = express()

// middleware 
app.use(express.json())
app.use(cors({ origin: 'http://localhost:3000', credentials: true }))

// router here
app.use('/api/user', userRouter)
app.use('/api/auth', authRoute)
app.use('/api/course', courserouter)
app.use('/api/lesson', lessionrouter)


app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server Live is running ',
  })
})

app.use(globalErrorHandler)

app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    status: false,
    message: 'Route not found',
  })
})

export default app
