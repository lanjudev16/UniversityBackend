import { Router } from 'express';
import { studentController } from './student.controller';

const router = Router();
router.post('/create-student', studentController.createStudent);
const studentRouter = router;
export default studentRouter;
