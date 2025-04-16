import { Schema, model } from 'mongoose';

const courseSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    teacherId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    likes: { type: Number, default: 0 },
    feedback: { type: [String], default: [] },
    students: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  { timestamps: true }
);

const Course = model('Course', courseSchema);
export default Course;
