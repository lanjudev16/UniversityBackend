import { Schema, model } from 'mongoose';
import { TSemesterRegistration, TSub } from './semesterRegistration.interface';
const courseSchema = new Schema<TSub>({
  title: {
    type: String,
    required: [true, 'Course title is required'],
    unique: true,
  },
  courseCode: {
    type: String,
    required: [true, 'Couresecode is required'],
    unique: true,
  },
  credit: {
    type: Number,
    required: [true, 'credit is required'],
  },
});
const semesterRegistrationSchema = new Schema<TSemesterRegistration>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  course: {
    type: [courseSchema],
    required: [true, 'Course is required'],
  },
  semesterId: {
    type: String,
    required: [true, 'Semester id is required'],
  },
});
export const semesterRegistrationModel = model(
  'semesterRegistration',
  semesterRegistrationSchema,
);
