/* eslint-disable @typescript-eslint/no-explicit-any */
import { semesterResultModel } from '../semesterResult/semesterResult.model';
import { yearGpaCalcModel } from './finalGpaCalculation.model';
import { calculateYearGpa, checkYear } from './utils';

const yearGpaGet = async (payLoad: any) => {
  const result = await semesterResultModel.find({ user: payLoad.user });
  const yearTotalSemester = checkYear(result, payLoad.year);

  const yearSemester = {
    user: payLoad.user,
    year: payLoad.year,
    yearSemester: yearTotalSemester,
  };
  const yearGpa = calculateYearGpa(yearSemester);
  const createSemesterYear = await yearGpaCalcModel.create(yearGpa);
  return createSemesterYear;
};
export const yearGpaCalcService = {
  yearGpaGet,
};
