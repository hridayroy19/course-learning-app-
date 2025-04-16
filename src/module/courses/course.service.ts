/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from "mongoose";
import { ICourse } from "./course.interface";
import Course from "./courses.model";

const createCourse = async (payload: any) => {
    const result = await Course.create(payload);
    return result;
};

const getAllCourses = async () => {
    const result = await Course.find();
    return result;
};

// like comment 

const likeCourse = async (courseId: string,studentId: string): Promise<ICourse | null> => {
    const course = await Course.findById(courseId);
    if (!course) throw new Error('Course not found');
  
    const studentObjectId = new mongoose.Types.ObjectId(studentId);
  
    const alreadyLiked = course.likedBy.some((id) => id.toString() === studentObjectId.toString());
  
    if (!alreadyLiked) {
      course.likes += 1;
      course.likedBy.push(studentObjectId);
      await course.save();
    }
  
    return course;
  };

  const submitFeedback = async (courseId: string,studentId: string, comment: string
  ): Promise<ICourse | null> => {

    const course = await Course.findById(courseId);
    if (!course) throw new Error('Course not found');
  
    const studentObjectId = new mongoose.Types.ObjectId(studentId);
    course.feedback.push({ studentId: studentObjectId, comment });
    await course.save();
    return course;
  };


export const courseService = {
    createCourse,
    getAllCourses,
    likeCourse,
    submitFeedback

};
