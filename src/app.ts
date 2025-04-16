/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from 'http-status'
import express, { NextFunction, Request, Response } from 'express'
import authRoute from './module/auth/auth.route'
import cors from 'cors'
import coursesRoute from './module/courses/courses.router'
import userRouter from './module/user/user.router'

const app = express()

// middleware 
app.use(express.json())
app.use(cors({ origin: 'http://localhost:3000', credentials: true }))

// router here
app.use('/api/user', userRouter)
app.use('/api/auth', authRoute)
app.use('/api/course', coursesRoute)



app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server Live ⚡',
  })
})

app.use((err: any, req: Request, res: Response, _next: NextFunction) => {
  res
    .status(httpStatus.INTERNAL_SERVER_ERROR)
    .json({ success: false, message: err.message, error: err })
})

app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    status: false,
    message: 'Route not found',
  })
})

export default app
