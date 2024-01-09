import AppError from '../../errors/AppError';
import { TAcademicDepartment } from './academicDepartment.interface';
import { academicDepartmentModel } from './academicDepartment.model';

const academicDepartmentCreate = async (payLoad: TAcademicDepartment) => {
  if (await academicDepartmentModel.findOne({ name: payLoad.name })) {
    throw new AppError(400, `${payLoad.name} is already exits`);
  }
  const result = await academicDepartmentModel.create(payLoad);
  return result;
};
export const academicDepartmentService = {
  academicDepartmentCreate,
};
