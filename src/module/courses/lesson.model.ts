import { Schema, model, Types } from 'mongoose';

const lessonSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  topics: [
    {
      type: Types.ObjectId,
      ref: 'Topic',
    }
  ],
}, {
  timestamps: true,
});

const Lesson = model('Lesson', lessonSchema);
export default Lesson;
