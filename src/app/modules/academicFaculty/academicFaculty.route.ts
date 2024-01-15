import { Router } from 'express';
import { academicFacultyController } from './academicFaculty.controller';
import validateRequest from '../../middleware/validateRequest';
import academicFacultyValidateSchema from './academicFaculty.validate';
const router = Router();
router.post(
  '/academicFaculty-create',
  validateRequest(academicFacultyValidateSchema),
  academicFacultyController.academicFacultyCreate,
);
const academicFacultyRouter = router;
export default academicFacultyRouter;
