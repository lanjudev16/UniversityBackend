import { Types } from 'mongoose';

export type TItem = {
  _id?: string;
  category: string;
  name: string;
  description: string;
  brand?: string;
  model?: string;
  purchaseDate: string;
  cost: number;
  condition: string;
  assignedTo: Types.ObjectId; //who buy
  department: Types.ObjectId;
  location: string; // Building, room number
};
