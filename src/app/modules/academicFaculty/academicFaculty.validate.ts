import { z } from 'zod';
const academicFacultyValidateSchema = z.object({
  body: z.object({
    name: z.string(),
  }),
});
export default academicFacultyValidateSchema;
