import { Router } from 'express';
import { methods as estadocontroller } from '../controllers/estado.controller.js';

const router = Router();
router.get('/', estadocontroller.getEstado);

export default router;