import { Request, Response } from 'express';
import { studentServices } from './student.service';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';

const createStudent = catchAsync(async (req: Request, res: Response) => {
  const result = await studentServices.createStudent(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Student create successfully',
    data: result,
  });
});
export const studentController = {
  createStudent,
};
