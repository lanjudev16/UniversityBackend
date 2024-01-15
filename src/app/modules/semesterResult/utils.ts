import {
  TAssignment,
  TCt,
  TExamResult,
  TSemesterResult,
} from './semesterResult.interface';

export const totalMark = (subs: TSemesterResult) => {
  const ctCalculation = (cts: TCt[]) => {
    let totalCtMark: number = 0;
    cts.forEach((ct) => {
      totalCtMark = (totalCtMark + ct.ctNumber) / cts.length;
    });
    return totalCtMark;
  };
  const assignmentCalculation = (assignments: TAssignment[]) => {
    let totalAssignmentMark: number = 0;
    assignments.forEach((ass) => {
      totalAssignmentMark =
        (totalAssignmentMark + ass.assignmentNumber) / assignments.length;
    });
    return totalAssignmentMark;
  };
  const examResult = (exmResult: TExamResult) => {
    const finalExamResult =
      (exmResult.firstExaminerResult + exmResult.secondExaminerResult) / 2;
    return finalExamResult;
  };
  subs.course.forEach((singleSub) => {
    const EvolutionResult =
      singleSub.result.attendance +
      ctCalculation(singleSub.result.ct) +
      assignmentCalculation(singleSub.result.assignment) +
      examResult(singleSub.result.examResult);
    singleSub.result.gpa = EvolutionResult;
  });
  return subs;
};
export const checkGrade = (Subs: TSemesterResult) => {
  Subs.course.forEach((singleSub) => {
    if ((singleSub.result.gpa as number) < 40) {
      singleSub.result.gpa = 0.0;
    } else if (
      (singleSub.result.gpa as number) >= 40 &&
      (singleSub.result.gpa as number) < 45
    ) {
      singleSub.result.gpa = 2.0;
    } else if (
      (singleSub.result.gpa as number) >= 45 &&
      (singleSub.result.gpa as number) < 50
    ) {
      singleSub.result.gpa = 2.25;
    } else if (
      (singleSub.result.gpa as number) >= 50 &&
      (singleSub.result.gpa as number) < 55
    ) {
      singleSub.result.gpa = 2.5;
    } else if (
      (singleSub.result.gpa as number) >= 55 &&
      (singleSub.result.gpa as number) < 60
    ) {
      singleSub.result.gpa = 2.75;
    } else if (
      (singleSub.result.gpa as number) >= 60 &&
      (singleSub.result.gpa as number) < 65
    ) {
      singleSub.result.gpa = 3.0;
    } else if (
      (singleSub.result.gpa as number) >= 65 &&
      (singleSub.result.gpa as number) < 70
    ) {
      singleSub.result.gpa = 3.25;
    } else if (
      (singleSub.result.gpa as number) >= 70 &&
      (singleSub.result.gpa as number) < 75
    ) {
      singleSub.result.gpa = 3.5;
    } else if (
      (singleSub.result.gpa as number) >= 75 &&
      (singleSub.result.gpa as number) < 80
    ) {
      singleSub.result.gpa = 3.75;
    } else if ((singleSub.result.gpa as number) >= 80) {
      singleSub.result.gpa = 4.0;
    }
  });
  return Subs;
};
