import { Router } from 'express';
import studentRouter from '../modules/student/student.route';
import userRouter from '../modules/user/user.route';
import academicDepartmentRoute from '../modules/academicDepartment/academicDepartment.route';
import academicFacultyRouter from '../modules/academicFaculty/academicFaculty.route';
import semesterRegistrationRouter from '../modules/semesterRegistration/semesterRegistration.route';
import semesterResultRouter from '../modules/semesterResult/semesterResult.route';
import yearGpaCalcRouter from '../modules/finalGpaCalculation/finalGpaCalculation.route';
const router = Router();
const modules = [
  {
    path: '/user',
    route: userRouter,
  },
  {
    path: '/student',
    route: studentRouter,
  },
  {
    path: '/department',
    route: academicDepartmentRoute,
  },
  {
    path: '/academicFaculty',
    route: academicFacultyRouter,
  },
  {
    path: '/semesterRegistration',
    route: semesterRegistrationRouter,
  },
  {
    path: '/semesterResult',
    route: semesterResultRouter,
  },
  {
    path: '/yearGpa',
    route: yearGpaCalcRouter,
  },
];
modules.forEach((singleRoute) => {
  router.use(singleRoute.path, singleRoute.route);
});
export default router;
