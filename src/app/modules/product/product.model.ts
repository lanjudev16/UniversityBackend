import mongoose from 'mongoose';

const desktopSchema = new mongoose.Schema(
  {
    desktopId: { type: String },
    departmentName: { type: String, required: true },
    labName: { type: String, required: true },
    isActive: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  },
);

const whiteboardSchema = new mongoose.Schema(
  {
    whiteboardId: { type: String, required: true },
    departmentName: { type: String, required: true },
    isActive: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  },
);

const markerSchema = new mongoose.Schema(
  {
    markerId: { type: String, required: true },
    departmentName: { type: String, required: true },
    isActive: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  },
);

const chairSchema = new mongoose.Schema(
  {
    chairId: { type: String, required: true },
    departmentName: { type: String, required: true },
    isActive: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  },
);

const deskBoxSchema = new mongoose.Schema(
  {
    deskBoxId: { type: String, required: true },
    departmentName: { type: String, required: true },
    isActive: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  },
);

const tableSchema = new mongoose.Schema(
  {
    tableId: { type: String, required: true },
    departmentName: { type: String, required: true },
    isActive: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  },
);

const DesktopModel = mongoose.model('Desktop', desktopSchema);
const WhiteboardModel = mongoose.model('Whiteboard', whiteboardSchema);
const MarkerModel = mongoose.model('Marker', markerSchema);
const ChairModel = mongoose.model('Chair', chairSchema);
const DeskBoxModel = mongoose.model('DeskBox', deskBoxSchema);
const TableModel = mongoose.model('Table', tableSchema);
export const productModel = {
  DesktopModel,
  WhiteboardModel,
  MarkerModel,
  ChairModel,
  DeskBoxModel,
  TableModel,
};
