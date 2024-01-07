import { Schema, model } from 'mongoose';
import { TName, TStudent } from './student.interface';

const nameSchema = new Schema<TName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const studentSchema = new Schema<TStudent>({
  name: {
    type: nameSchema,
    required: true,
  },
  id: {
    type: String,
    required: [true, 'ID is required'],
    unique: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'User id is required'],
    unique: true,
    ref: 'user',
  },
  department: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  dateOfBirth: { type: Date },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  admissionYear: {
    type: Date,
    required: [true, 'Admission year is required'],
  },
  contactNumber: {
    type: String,
    required: [true, 'Contact number is required'],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message: '{VALUE} is not a valid gender',
    },
    required: [true, 'Gender is required'],
  },
});
export const studentModel = model('user', studentSchema);
