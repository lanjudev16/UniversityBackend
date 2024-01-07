import { Router } from 'express';
import studentRouter from '../modules/student/student.route';

const router = Router();
router.use('/student', studentRouter);
export default router;
