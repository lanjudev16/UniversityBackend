import { Schema, model } from 'mongoose';
import {
  TAssignment,
  TCt,
  TExamResult,
  TResult,
  TSemesterResult,
  TSubResult,
} from './semesterResult.interface';
const assignmentSchema = new Schema<TAssignment>({
  assignmentName: {
    type: String,
    required: [true, 'Assignment name is required'],
  },
  assignmentNumber: {
    type: Number,
    required: [true, 'Assignment mark is required '],
  },
});
const ctSchema = new Schema<TCt>({
  ctName: {
    type: String,
    required: [true, 'CtName is required'],
  },
  ctNumber: {
    type: Number,
    required: [true, 'Ct Number is required'],
  },
});
const examResultSchema = new Schema<TExamResult>({
  firstExaminerResult: {
    type: Number,
    required: [true, 'First examiner result is required'],
  },
  secondExaminerResult: {
    type: Number,
    required: [true, 'Second Examiner result is required'],
  },
});
const resultSchema = new Schema<TResult>({
  attendance: {
    type: Number,
    required: [true, 'Attendance mark is required'],
  },
  assignment: {
    type: [assignmentSchema],
    required: [true, 'Assignment is required'],
  },
  ct: {
    type: [ctSchema],
    required: [true, 'Ct is required'],
  },
  examResult: {
    type: examResultSchema,
    required: [true, 'Exam result is required'],
  },
  gpa: {
    type: Number,
  },
});
const courseSchema = new Schema<TSubResult>({
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
    required: [true, 'Credit of the each subject is required'],
  },
  result: {
    type: resultSchema,
    required: [true, 'Result is required'],
  },
});
export const semesterResultSchema = new Schema<TSemesterResult>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  course: {
    type: [courseSchema],
    required: [true, 'Course is required'],
  },
  semesterId: {
    type: String,
    required: [true, 'Semester id is required'],
  },
  totalCredit: {
    type: Number,
  },
  semesterGpa: {
    type: Number,
  },
});
export const semesterResultModel = model(
  'semesterResult',
  semesterResultSchema,
);
