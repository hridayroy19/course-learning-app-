import { Schema, model, Types } from 'mongoose';

export interface ICourse {
    title: string;
    description: string;
    lessons?: Types.ObjectId[];
    createdBy: Types.ObjectId;
    category?: string;
    level?: string;
    price?: number;
    thumbnail?: string;
}

const courseSchema = new Schema<ICourse>({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    lessons: [
        {
            type: Types.ObjectId,
            ref: 'Lesson',
        }
    ],
    createdBy: {
        type: Types.ObjectId,
        ref: 'User',
        required: true,
    },
    category: String,
    level: String,
    price: {
        type: Number,
        default: 0,
    },
    thumbnail: String,
}, {
    timestamps: true,
});

const Course = model<ICourse>('Course', courseSchema);
export default Course;
