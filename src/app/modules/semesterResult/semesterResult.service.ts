import { TSemesterResult } from './semesterResult.interface';
import { semesterResultModel } from './semesterResult.model';
import { checkGrade, totalMark } from './utils';

const semesterResultCreate = async (payLoad: TSemesterResult) => {
  const SemesterResult = checkGrade(totalMark(payLoad));
  const result = await semesterResultModel.create(SemesterResult);
  return result;
};
export const semesterResultService = {
  semesterResultCreate,
};
