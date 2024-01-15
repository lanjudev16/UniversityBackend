import { Router } from 'express';
import studentRouter from '../modules/student/student.route';
import userRouter from '../modules/user/user.route';
import academicDepartmentRoute from '../modules/academicDepartment/academicDepartment.route';
import academicFacultyRouter from '../modules/academicFaculty/academicFaculty.route';
import semesterRegistrationRouter from '../modules/semesterRegistration/semesterRegistration.route';
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
];
modules.forEach((singleRoute) => {
  router.use(singleRoute.path, singleRoute.route);
});
export default router;
