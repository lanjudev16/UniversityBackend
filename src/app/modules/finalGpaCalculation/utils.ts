import { TSemesterResult } from '../semesterResult/semesterResult.interface';
import { TYgpaCalc } from './finalGpaCalculation.interface';

export const checkYear = (
  semesterResult: TSemesterResult[],
  targetYear: number,
) => {
  const result = semesterResult.filter(
    (singleSemester) =>
      Number(singleSemester.semesterId.slice(-4)) == targetYear,
  );
  return result;
};
export const calculateYearGpa = (yearSemester: TYgpaCalc) => {
  let totalPoint: number = 0;
  let totalCredit: number = 0;
  yearSemester.yearSemester.forEach((singleSemester) => {
    totalPoint =
      totalPoint +
      (singleSemester.semesterGpa as number) *
        (singleSemester.totalCredit as number);
    totalCredit = totalCredit + (singleSemester.totalCredit as number);
  });
  yearSemester.yearGpa = totalPoint / totalCredit;
  return yearSemester;
};
