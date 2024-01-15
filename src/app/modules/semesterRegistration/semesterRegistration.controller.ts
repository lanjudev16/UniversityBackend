import { Request, Response } from 'express';
import { semesterRegistrationService } from './semesterRegistration.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

const semesterRegistrationCreate = catchAsync(
  async (req: Request, res: Response) => {
    const result = await semesterRegistrationService.semesterRegistrationCreate(
      req.body,
    );
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'semester registration successfully created',
      data: result,
    });
  },
);
export const semesterRegistrationController = {
  semesterRegistrationCreate,
};
