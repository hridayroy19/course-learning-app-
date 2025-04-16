import { Schema, model } from 'mongoose';

const lessonSchema = new Schema(
  {
    title: { type: String, required: true },
    courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    description: { type: String, required: true }
  },
  { timestamps: true }
);

const Lesson = model('Lesson', lessonSchema);
export default Lesson;
