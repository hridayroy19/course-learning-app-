// import { Schema, model } from 'mongoose';
// import { ICourse } from './course.interface';

// const courseSchema = new Schema<ICourse>(
//   {
//     title: { type: String, required: true, trim: true },
//     description: { type: String, required: true },
//     teacherId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//     likes: { type: Number, default: 0 },
//     feedback: { type: [String], default: [] },
//     students: [{ type: Schema.Types.ObjectId, ref: 'User' }],
//   },
//   { timestamps: true }
// );

// const Course = model('Course', courseSchema);
// export default Course;

// course.model.ts
import { Schema, model } from 'mongoose';
import { ICourse } from './course.interface';

const courseSchema = new Schema<ICourse>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    teacherId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    lessons: [{ type: Schema.Types.ObjectId, ref: 'Lesson' }],
    topics: [{ type: Schema.Types.ObjectId, ref: 'Topic' }],
    likes: { type: Number, default: 0 },
    likedBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    feedback: [
      {
        studentId: { type: Schema.Types.ObjectId, ref: 'User' },
        comment: String,
      },
    ],
    enrolledStudents: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  { timestamps: true }
);

const Course = model<ICourse>('Course', courseSchema);
export default Course;
