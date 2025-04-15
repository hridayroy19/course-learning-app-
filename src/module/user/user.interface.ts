import { Types } from 'mongoose'

export interface IUser {
  _id?: Types.ObjectId
  name: string
  email: string
  password: string
  role: 'student' | 'teacher'
  userStatus?: string
  bio?: string
  profileImage?: string
  enrolledCourses?: Types.ObjectId[] // students
  createdCourses?: Types.ObjectId[] // teachers
  likedCourses?: Types.ObjectId[]
  followedTeachers?: Types.ObjectId[]
  createdAt?: Date
}
