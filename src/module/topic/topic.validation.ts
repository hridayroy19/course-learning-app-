import { z } from 'zod';

export const createTopicSchema = z.object({

    title: z.string().min(1, 'Title is required'),
    content: z.string().min(1, 'Content is required'),
    lessonId: z.string().min(1, 'Lesson ID is required'),
    quiz: z
      .array(
        z.object({
          question: z.string(),
          options: z.array(z.string()),
          answer: z.string()
        })
      )
      .optional()
});

export const updateTopicSchema = z.object({

    title: z.string().optional(),
    content: z.string().optional(),
    lessonId: z.string().optional(),
    quiz: z
      .array(
        z.object({
          question: z.string(),
          options: z.array(z.string()),
          answer: z.string()
        })
      )
      .optional()
});
