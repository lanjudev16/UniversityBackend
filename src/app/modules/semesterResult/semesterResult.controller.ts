import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { semesterResultService } from './semesterResult.service';

const semesterResultCreate = catchAsync(async (req: Request, res: Response) => {
  const result = await semesterResultService.semesterResultCreate(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'semester Result successfully created',
    data: result,
  });
});
export const semesterResultController = {
  semesterResultCreate,
};
