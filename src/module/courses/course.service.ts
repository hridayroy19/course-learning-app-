/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from "mongoose";
import { ICourse } from "./course.interface";
import Course from "./courses.model";
import User from "../user/user.model";

const createCourse = async (payload: any) => {
  const result = await Course.create(payload);
  return result;
};

const getAllCourses = async () => {
  const result = await Course.find();
  return result;
};

// like comment 

const likeCourse = async (courseId: string, studentId: string): Promise<ICourse | null> => {
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

const submitFeedback = async (courseId: string, studentId: string, comment: string
): Promise<ICourse | null> => {

  const course = await Course.findById(courseId);
  if (!course) throw new Error('Course not found');

  const studentObjectId = new mongoose.Types.ObjectId(studentId);
  course.feedback.push({ studentId: studentObjectId, comment });
  await course.save();
  return course;
};

//student follow course
export const followCourseService = async (courseId: string, userId: string) => {
  const course = await Course.findById(courseId);
  if (!course) {
    throw new Error('Course not found');
  }

  const user = await User.findById(userId);
  if (!user) {
    throw new Error('User not found ');
  }

  const userObjectId = new mongoose.Types.ObjectId(userId);

  if (course.followedBy.includes(userObjectId)) {
    throw new Error('You already followed this course');
  }

  course.followedBy.push(userObjectId);
  await course.save();

  return {
    message: 'Course followed successfully',
    followedBy: course.followedBy,
    courseId: course._id,
  };
};


export const enrollCourseService = async (courseId: string, userId: string) => {
  const course = await Course.findById(courseId);
  if (!course) {
    throw new Error('Course not found');
  }

  const user = await User.findById(userId);

  if (!user) {
    throw new Error('User not found');
  }

  if (course.enrolledStudents.includes(user._id)) {
    throw new Error('Already enrolled in this course');
  }

  // Add user to course
  course.enrolledStudents.push(user._id);
  await course.save();

  // user.enrolledCourses = [];
  // user.enrolledCourses.push(course._id);
  // await user.save();

  return {
    courseId: course._id,
    userId: user._id,
  };
};


export const courseService = {
  createCourse,
  getAllCourses,
  likeCourse,
  submitFeedback,
  followCourseService,
  enrollCourseService
};
