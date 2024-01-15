import { TAcademicFaculty } from './academicFaculty.interface';
import { academicFacultyModel } from './academicFaculty.model';

const academicFacultyCreate = async (payLoad: TAcademicFaculty) => {
  const result = await academicFacultyModel.create(payLoad);
  return result;
};
export const academicFacultyService = {
  academicFacultyCreate,
};
