import { Request, Response } from 'express';
import { productService } from './product.service';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';

const desktopCreate = catchAsync(async (req: Request, res: Response) => {
  const result = await productService.desktopCreate(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'desktop successfully create',
    data: result,
  });
});
const deskBoxCreate = catchAsync(async (req: Request, res: Response) => {
  const result = await productService.deskBoxCreate(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'deskBox successfully create',
    data: result,
  });
});
const whiteboardCreate = catchAsync(async (req: Request, res: Response) => {
  const result = await productService.whiteboardCreate(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'whiteboard successfully create',
    data: result,
  });
});
const tableCreate = catchAsync(async (req: Request, res: Response) => {
  const result = await productService.tableCreate(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'whiteboard successfully create',
    data: result,
  });
});
const chairCreate = catchAsync(async (req: Request, res: Response) => {
  const result = await productService.chairCreate(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'table successfully create',
    data: result,
  });
});
const markerCreate = catchAsync(async (req: Request, res: Response) => {
  const result = await productService.markerCreate(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'marker successfully create',
    data: result,
  });
});
const getAllProduct = async (req: Request, res: Response) => {
  const result = await productService.getAllProduct();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Get all product successfully create',
    data: result,
  });
};
export const productController = {
  desktopCreate,
  deskBoxCreate,
  whiteboardCreate,
  tableCreate,
  chairCreate,
  markerCreate,
  getAllProduct,
};
