import { Types } from 'mongoose';
export type TSub = {
  title: string;
  courseCode: string;
  credit: number;
};
export type TSemesterRegistration = {
  user: Types.ObjectId;
  semesterId: string;
  course: TSub[];
};
