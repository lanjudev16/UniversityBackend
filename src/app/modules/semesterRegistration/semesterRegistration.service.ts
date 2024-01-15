import { TSemesterRegistration } from './semesterRegistration.interface';
import { semesterRegistrationModel } from './semesterRegistration.model';

const semesterRegistrationCreate = async (payLoad: TSemesterRegistration) => {
  const result = await semesterRegistrationModel.create(payLoad);
  return result;
};
export const semesterRegistrationService = {
  semesterRegistrationCreate,
};
