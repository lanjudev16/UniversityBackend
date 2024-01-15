import { Router } from 'express';
import { semesterResultController } from './semesterResult.controller';
const router = Router();
router.post(
  '/semesterResult-create',
  semesterResultController.semesterResultCreate,
);
const semesterResultRouter = router;
export default semesterResultRouter;
