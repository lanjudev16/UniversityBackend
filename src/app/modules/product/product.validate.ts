import { z } from 'zod';

export const TDesktop = z.object({
  desktopId: z.string(),
  departmentName: z.string(),
  labName: z.string(),
  isActive: z.boolean(),
});

export const TWhiteboard = z.object({
  whiteboardId: z.string(),
  departmentName: z.string(),
  isActive: z.boolean(),
});

export const TMarker = z.object({
  markerId: z.string(),
  departmentName: z.string(),
  isActive: z.boolean(),
});

export const TChair = z.object({
  chairId: z.string(),
  departmentName: z.string(),
  isActive: z.boolean(),
});

export const TDeskBox = z.object({
  deskBoxId: z.string(),
  departmentName: z.string(),
  isActive: z.boolean(),
});

export const TTable = z.object({
  tableId: z.string(),
  departmentName: z.string(),
  isActive: z.boolean(),
});

export const TProduct = z.object({
  desktop: TDesktop,
  whiteboard: TWhiteboard,
  marker: TMarker,
  chair: TChair,
  deskBox: TDeskBox,
  table: TTable,
});

export const productModelSchema = z.object({
  desktop: TDesktop,
  whiteboard: TWhiteboard,
  marker: TMarker,
  chair: TChair,
  deskBox: TDeskBox,
  table: TTable,
});
