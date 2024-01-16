import AppError from '../../errors/AppError';
import { TSemesterResult } from './semesterResult.interface';
import { semesterResultModel } from './semesterResult.model';
import {
  checkGrade,
  isExitsSemester,
  semesterGpaCalculation,
  totalMark,
} from './utils';

const semesterResultCreate = async (payLoad: TSemesterResult) => {
  if (await isExitsSemester(payLoad)) {
    throw new AppError(500, `${payLoad.semesterId} already exits`);
  }
  const SemesterResult = checkGrade(totalMark(payLoad));
  const semesterGpa = semesterGpaCalculation(SemesterResult);
  const result = await semesterResultModel.create(semesterGpa);
  return result;
};
export const semesterResultService = {
  semesterResultCreate,
};
