import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { yearGpaCalcService } from './finalGpaCalculation.service';

const yearGpaCalcGet = catchAsync(async (req: Request, res: Response) => {
  const query = {
    user: req.query.user,
    year: req.query.year,
  };
  const result = await yearGpaCalcService.yearGpaGet(query);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Year Result successfully created',
    data: result,
  });
});
export const yearGpaCalcController = {
  yearGpaCalcGet,
};
