import { userModel } from './user.model';

const generateId = async (isMale: string) => {
  let hallCode: string = '11';
  if (isMale === 'Female') {
    hallCode = '12';
  }
  const findLastStudentId = async () => {
    const lastStudent = await userModel
      .findOne(
        {
          role: 'student',
        },
        {
          id: 1,
          _id: 0,
        },
      )
      .sort({
        createdAt: -1,
      })
      .lean();

    return lastStudent?.id ? lastStudent.id : '0';
  };
  const admissionYear = new Date().getFullYear().toString().slice(2, 5);
  const lastStudentId = await findLastStudentId();
  const IdNo = (Number(lastStudentId?.substring(6, 8)) + 1)
    .toString()
    .padStart(2, '0');

  const id = admissionYear + hallCode + '11' + IdNo;
  return id;
};
export default generateId;
