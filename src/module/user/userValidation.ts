import { z } from 'zod'

const userValidationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  password: z.string().min(6, 'Password should have at least 6 characters'),
  role: z.enum(['student', 'teacher']),
  userStatus: z.string().optional(),
  bio: z.string().optional(),
  profileImage: z.string().optional(),
  enrolledCourses: z.array(z.string()).optional(),
  createdCourses: z.array(z.string()).optional(),
  likedCourses: z.array(z.string()).optional(),
  followedTeachers: z.array(z.string()).optional(),

  createdAt: z.date().optional(),
})

export const UserValidation = {
  userValidationSchema,
}
