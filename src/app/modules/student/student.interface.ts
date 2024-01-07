import { Types } from 'mongoose';

export type TName = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type TStudent = {
  id: string;
  user: Types.ObjectId;
  name: TName;
  email: string;
  gender: 'Male' | 'Female';
  dateOfBirth: Date;
  contactNumber: string;
  admissionYear: Date;
  department: Types.ObjectId;
  isDeleted: boolean;
};
