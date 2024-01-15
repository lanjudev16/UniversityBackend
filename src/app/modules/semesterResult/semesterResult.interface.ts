import { Types } from 'mongoose';
export type TCt = {
  ctName: string;
  ctNumber: number;
};
export type TAssignment = {
  assignmentName: string;
  assignmentNumber: number;
};
export type TExamResult={
  firstExaminerResult:number;
  secondExaminerResult:number;
}
export type TResult = {
  attendance: number;
  ct: TCt[];
  assignment: TAssignment[];
  examResult:TExamResult
  gpa?: number;
};
export type TSubResult = {
  title: string;
  courseCode: string;
  result: TResult;
};
export type TSemesterResult = {
  user: Types.ObjectId;
  semesterId: string;
  course: TSubResult[];
};
