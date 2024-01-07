import { TStudent } from './student.interface';
import { studentModel } from './student.model';

const createStudent = async (payLoad: TStudent) => {
  const result = await studentModel.create(payLoad);
  return result;
};
export const studentServices = {
  createStudent,
};
