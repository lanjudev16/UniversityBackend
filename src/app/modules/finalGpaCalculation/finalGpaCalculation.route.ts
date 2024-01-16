import { Router } from 'express';
import { yearGpaCalcController } from './finalGpaCalculation.controller';
const router = Router();
router.post('/yearGpa-create', yearGpaCalcController.yearGpaCalcGet);
const yearGpaCalcRouter = router;
export default yearGpaCalcRouter;
