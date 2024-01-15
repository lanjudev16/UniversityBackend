import z from 'zod';

export const courseValidateSchema = z.object({
  title: z.string(),
  courseCode: z.string(),
  credit: z.number(),
});

export const semesterRegistrationValidateSchema = z.object({
  body: z.object({
    user: z.string(),
    course: z.array(courseValidateSchema),
    semesterId: z.string(),
  }),
});
