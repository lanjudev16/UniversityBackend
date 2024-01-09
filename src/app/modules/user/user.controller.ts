import { Request, Response } from 'express';
import { userServices } from './user.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

const createStudent = catchAsync(async (req: Request, res: Response) => {
  const result = await userServices.createStudent(
    req.body.body,
    req.body.password,
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Student created successfully',
    data: result,
  });
});
export const userController = {
  createStudent,
};
