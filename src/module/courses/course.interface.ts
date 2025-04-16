// course.interface.ts
import { Types } from "mongoose";

export interface ICourse {
  title: string;
  description: string;
  teacherId: Types.ObjectId;
  lessons?: Types.ObjectId[];
  topics?: Types.ObjectId[];
  likes: number;
  likedBy: Types.ObjectId[];
  feedback: {
    studentId: Types.ObjectId;
    comment: string;
  }[];
  enrolledStudents: Types.ObjectId[];
  followedBy:Types.ObjectId[]
}
