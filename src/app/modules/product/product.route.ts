import { Router } from 'express';
import { productController } from './product.controller';

const router = Router();
router.post('/desktop-create', productController.desktopCreate);
router.put('/desktop-update/:id', productController.desktopUpdate);
router.post('/deskBox-create', productController.deskBoxCreate);
router.put('/deskBox-update/:id', productController.deskBoxUpdate);
router.post('/marker-create', productController.markerCreate);
router.put('/marker-update/:id', productController.markerUpdate);
router.post('/whiteboard-create', productController.whiteboardCreate);
router.put('/whiteboard-update/:id', productController.whiteboardUpdate);
router.post('/table-create', productController.tableCreate);
router.put('/table-update/:id', productController.tableUpdate);
router.post('/chair-create', productController.chairCreate);
router.put('/chair-update/:id', productController.chairUpdate);
router.get('/get-all-product', productController.getAllProduct);
const productRouter = router;
export default productRouter;
