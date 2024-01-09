import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { academicDepartmentService } from './academicDepartment.service';
import sendResponse from '../../utils/sendResponse';

const academicDepartmentCreate = catchAsync(
  async (req: Request, res: Response) => {
    const result = await academicDepartmentService.academicDepartmentCreate(
      req.body,
    );
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Academic department create successfully',
      data: result,
    });
  },
);
export const academicDepartmentController = {
  academicDepartmentCreate,
};
