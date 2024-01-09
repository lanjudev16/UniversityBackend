import {z} from 'zod';
const academicDepartmentValidateSchema = z.object({
  body: z.object({
    name: z.string(),
    academicFaculty: z.string(),
  }),
});
export default academicDepartmentValidateSchema;
