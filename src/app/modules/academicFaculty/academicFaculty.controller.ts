import { Request, Response } from 'express';
import { academicFacultyService } from './academicFaculty.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

const academicFacultyCreate = catchAsync(
  async (req: Request, res: Response) => {
    const result = await academicFacultyService.academicFacultyCreate(req.body);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Academic faculty create successfully',
      data: result,
    });
  },
);
export const academicFacultyController = {
  academicFacultyCreate,
};
