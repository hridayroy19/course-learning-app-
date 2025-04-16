import { z } from 'zod';

export const createCourseSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    description: z.string().min(1, 'Description is required'),
    teacherId: z.string().min(1, 'Teacher ID is required'),

});

export const updateCourseSchema = z.object({
    title: z.string().optional(),
    description: z.string().optional(),
});
