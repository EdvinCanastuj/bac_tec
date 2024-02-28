import { Router } from 'express';
import { methods as razoncontroller } from '../controllers/razon.controllers.js';

const router = Router();

router.get('/', razoncontroller.getRazon);

export default router;