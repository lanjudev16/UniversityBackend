import { Router } from 'express';
import { semesterRegistrationController } from './semesterRegistration.controller';
import validateRequest from '../../middleware/validateRequest';
import { semesterRegistrationValidateSchema } from './semesterRegistration.validate';
const router = Router();
router.post(
  '/semesterRegistration-create',
  validateRequest(semesterRegistrationValidateSchema),
  semesterRegistrationController.semesterRegistrationCreate,
);
const semesterRegistrationRouter = router;
export default semesterRegistrationRouter;
