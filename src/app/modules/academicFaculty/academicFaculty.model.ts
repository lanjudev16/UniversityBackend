import { Schema, model } from 'mongoose';
import { TAcademicFaculty } from './academicFaculty.interface';

const academicFacultySchema = new Schema<TAcademicFaculty>({
  name: {
    type: String,
    required: [true, 'name is required'],
  },
});
export const academicFacultyModel = model(
  'academicFaculty',
  academicFacultySchema,
);
