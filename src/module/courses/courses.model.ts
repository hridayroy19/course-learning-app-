import mongoose, { Schema, model } from 'mongoose';

const courseSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Please provide a course title'],
    },
    description: {
        type: String,
        required: [true, 'Please provide a course description'],
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Course = model('Course', courseSchema);
export default Course;
