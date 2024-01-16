import { Types } from 'mongoose';
import { TSemesterResult } from '../semesterResult/semesterResult.interface';

export type TYgpaCalc = {
  user: Types.ObjectId;
  year:number;
  yearSemester:TSemesterResult[];
  yearGpa?:number;
};
export type TQuery = { user: string; year: number };
