import { z } from 'zod';

export const createLessonSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    courseId: z.string().min(1, "Course ID is required")
});

export const updateLessonSchema = z.object({
    title: z.string().optional(),
    description: z.string().optional(),
});
