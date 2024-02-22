import mongoose from 'mongoose';
import { TItem } from './item.interface';

export const ItemSchema = new mongoose.Schema<TItem>(
  {
    category: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    brand: { type: String },
    model: { type: String },
    purchaseDate: { type: String },
    cost: { type: Number, required: true },
    condition: { type: String, required: true },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'department' },
    location: { type: String, required: true },
  },
  { timestamps: true },
);
export const itemModel = mongoose.model<TItem>('item', ItemSchema);
