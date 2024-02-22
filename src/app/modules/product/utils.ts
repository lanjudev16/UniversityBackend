import { productModel } from './product.model';

const desktopId = async () => {
  const totalDesktop = (await productModel.DesktopModel.find()).length
    .toString()
    .padStart(3, '0');
  const id = `Desktop${totalDesktop}`;
  return id;
};
const deskBoxId = async () => {
  const total = (await productModel.DeskBoxModel.find()).length
    .toString()
    .padStart(3, '0');
  const id = `DeskBox${total}`;
  return id;
};
const WhiteboardId = async () => {
  const total = (await productModel.WhiteboardModel.find()).length
    .toString()
    .padStart(3, '0');
  const id = `whiteboard${total}`;
  return id;
};
const markerId = async () => {
  const total = (await productModel.MarkerModel.find()).length
    .toString()
    .padStart(3, '0');
  const id = `marker${total}`;
  return id;
};
const tableId = async () => {
  const total = (await productModel.TableModel.find()).length
    .toString()
    .padStart(3, '0');
  const id = `table${total}`;
  return id;
};
const chairId = async () => {
  const total = (await productModel.ChairModel.find()).length
    .toString()
    .padStart(3, '0');
  const id = `chair${total}`;
  return id;
};
export const productUtils = {
  desktopId,
  deskBoxId,
  WhiteboardId,
  markerId,
  tableId,
  chairId,
};
