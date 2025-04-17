/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from "mongoose";
import { ICourse } from "./course.interface";
import Course from "./courses.model";
import User from "../user/user.model";

// coruse crud opartion start
const createCourse = async (payload: any) => {
  const result = await Course.create(payload);
  return result;
};

const getSingleCourse = async (id: string) => {
  const result = await Course.findById(id);
  return result;
};

const deleteCourse = async (id: string) => {
  const result = await Course.findByIdAndDelete(id);
  return result;
};

const getAllCourses = async () => {
  const result = await Course.find().populate('topics')
    .populate('lessons')
    .populate('likedBy')
    .populate('followedBy')
    .populate('enrolledStudents');
  return result;
};


const updateCourse = async (id: string, payload: any) => {
  const result = await Course.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

// >>> end crud oparation>>

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
const followCourseService = async (courseId: string, userId: string) => {
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

  user.followedCourses ??= [];
  user.followedCourses.push(course._id);
  await user.save();

  return {
    message: 'Course followed successfully',
    followedBy: course.followedBy,
    courseId: course._id,
  };
};


const enrollCourseService = async (courseId: string, userId: string) => {
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

  // Add user to course data
  course.enrolledStudents.push(user._id);
  await course.save();

  user.enrolledCourses = [];
  // console.log(course._id,"after ")
  user.enrolledCourses.push(course._id);
  // console.log(course._id,"push ")
  await user.save();

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
  enrollCourseService,
  getSingleCourse,
  deleteCourse,
  updateCourse
};
