/* eslint-disable @typescript-eslint/no-explicit-any */
import { TStudent } from '../student/student.interface';
import { TUser } from './user.interface';
import { userModel } from './user.model';
import generateId from './utils';
import { studentModel } from '../student/student.model';
import mongoose from 'mongoose';

const createStudent = async (payLoad: TStudent, password: string) => {
  const userData: Partial<TUser> = {};
  userData.password = password;
  userData.id = await generateId(payLoad.gender);
  userData.email = payLoad.email;
  userData.role = 'student';
  userData.status = 'in-progress';
  userData.isDeleted = false;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    //first transaction

    const userCreate = await userModel.create([userData], { session });
    //create a student
    if (!userCreate.length) {
      throw new Error('Failed to create user');
    }
    //second transaction
    payLoad.id = userCreate[0].id;
    payLoad.user = userCreate[0]._id;
    const studentCreate = await studentModel.create([payLoad], { session });
    if (!studentCreate.length) {
      throw new Error('Failed to create student');
    }
    await session.commitTransaction();
    await session.endSession();
    return studentCreate;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};

export const userServices = {
  createStudent,
};
