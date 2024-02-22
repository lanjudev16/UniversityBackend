import { Router } from 'express';
import { productController } from './product.controller';

const router = Router();
router.post('/desktop-create', productController.desktopCreate);
router.post('/deskBox-create', productController.deskBoxCreate);
router.post('/marker-create', productController.markerCreate);
router.post('/whiteboard-create', productController.whiteboardCreate);
router.post('/table-create', productController.tableCreate);
router.post('/chair-create', productController.chairCreate);
router.get('/get-all-product', productController.getAllProduct);
const productRouter = router;
export default productRouter;
