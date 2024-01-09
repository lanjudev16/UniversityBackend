import { Router } from 'express';
import { academicDepartmentController } from './academicDepartment.controller';
import validateRequest from '../../middleware/validateRequest';
import academicDepartmentValidateSchema from './academicDepartment.validate';
const router = Router();
router.post(
  '/create-department',
  validateRequest(academicDepartmentValidateSchema),
  academicDepartmentController.academicDepartmentCreate,
);
const academicDepartmentRoute = router;
export default academicDepartmentRoute;
