import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    needPasswordChanged: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: {
        values: ['admin', 'faculty', 'administrator', 'staff'],
        message: `{VALUE} is not recognized`,
      },
      required: [true, 'Role is required'],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: {
        values: ['blocked', 'in-progress'],
        message: `you are {VALUE} try again please`,
      },
      required: [true, 'status is required'],
    },
  },
  {
    timestamps: true,
  },
);
export const userModel = model('user', userSchema);
