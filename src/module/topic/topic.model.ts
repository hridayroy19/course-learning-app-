import { Schema, model } from 'mongoose';

const topicSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    lessonId: { type: Schema.Types.ObjectId, ref: 'Lesson', required: true },
    quiz: [
      {
        question: String,
        options: [String],
        answer: String
      }
    ]
  },
  { timestamps: true }
);

const Topic = model('Topic', topicSchema);
export default Topic;
