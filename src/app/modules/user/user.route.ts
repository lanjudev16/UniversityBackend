import { Router } from 'express';
import { userController } from './user.controller';
const router = Router();
router.post('/create-student', userController.createStudent);
const userRouter = router;
export default userRouter;
