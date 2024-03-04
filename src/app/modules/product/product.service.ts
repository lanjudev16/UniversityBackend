import {
  TChair,
  TDeskBox,
  TDesktop,
  TMarker,
  TTable,
  TWhiteboard,
} from './product.interface';
import { productModel } from './product.model';
import { productUtils } from './utils';

export const desktopCreate = async (payLoad: TDesktop) => {
  const id = await productUtils.desktopId();
  payLoad.desktopId = id;
  const result = await productModel.DesktopModel.create(payLoad);
  return { result, id };
};
const desktopUpdate = async (payLoad: TDesktop, id: string) => {
  const result = await productModel.DesktopModel.findOneAndUpdate(
    { desktopId: id },
    payLoad,
    {
      runValidators: true,
      new: true,
    },
  );
  return result;
};
export const whiteboardCreate = async (payLoad: TWhiteboard) => {
  const id = await productUtils.WhiteboardId();
  payLoad.whiteboardId = id;
  const result = await productModel.WhiteboardModel.create(payLoad);
  return { result, id };
};
const whiteboardUpdate = async (payLoad: TWhiteboard, id: string) => {
  const result = await productModel.WhiteboardModel.findOneAndUpdate(
    { whiteboardId: id },
    payLoad,
    {
      runValidators: true,
      new: true,
    },
  );
  return result;
};
export const deskBoxCreate = async (payLoad: TDeskBox) => {
  const id = await productUtils.deskBoxId();
  payLoad.deskBoxId = id;
  const result = await productModel.DeskBoxModel.create(payLoad);
  return { result, id };
};
const deskBoxUpdate = async (payLoad: TDeskBox, id: string) => {
  const result = await productModel.DeskBoxModel.findOneAndUpdate(
    { deskBoxId: id },
    payLoad,
    {
      runValidators: true,
      new: true,
    },
  );
  return result;
};
export const markerCreate = async (payLoad: TMarker) => {
  const id = await productUtils.markerId();
  payLoad.markerId = id;
  const result = await productModel.MarkerModel.create(payLoad);
  return { result, id };
};
const markerUpdate = async (payLoad: TMarker, id: string) => {
  const result = await productModel.MarkerModel.findOneAndUpdate(
    { markerId: id },
    payLoad,
    {
      runValidators: true,
      new: true,
    },
  );
  return result;
};
export const chairCreate = async (payLoad: TChair) => {
  const id = await productUtils.chairId();
  payLoad.chairId = id;
  const result = await productModel.ChairModel.create(payLoad);
  return { result, id };
};
export const tableCreate = async (payLoad: TTable) => {
  const id = await productUtils.tableId();
  payLoad.tableId = id;
  const result = await productModel.TableModel.create(payLoad);
  return { result, id };
};
const chairUpdate = async (payLoad: TChair, id: string) => {
  const result = await productModel.ChairModel.findOneAndUpdate(
    { chairId: id },
    payLoad,
    {
      runValidators: true,
      new: true,
    },
  );
  return result;
};
const tableUpdate = async (payLoad: TTable, id: string) => {
  const result = await productModel.TableModel.findOneAndUpdate(
    { tableId: id },
    payLoad,
    {
      runValidators: true,
      new: true,
    },
  );
  return result;
};

const getAllProduct = async () => {
  const getChair = await productModel.ChairModel.find();
  const getTable = await productModel.TableModel.find();
  const getDesktop = await productModel.DesktopModel.find();
  const getDeskBox = await productModel.DeskBoxModel.find();
  const getMarker = await productModel.MarkerModel.find();
  const getWhiteboard = await productModel.WhiteboardModel.find();
  return {
    chair: getChair,
    table: getTable,
    desktop: getDesktop,
    deskBox: getDeskBox,
    marker: getMarker,
    whiteboard: getWhiteboard,
  };
};

export const productService = {
  tableUpdate,
  whiteboardUpdate,
  markerUpdate,
  deskBoxUpdate,
  desktopCreate,
  desktopUpdate,
  chairUpdate,
  whiteboardCreate,
  deskBoxCreate,
  markerCreate,
  chairCreate,
  tableCreate,
  getAllProduct,
};
