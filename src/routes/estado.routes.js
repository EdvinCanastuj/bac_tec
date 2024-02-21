import { Router } from 'express';
import { methods as estadocontroller } from '../controollers/estado.controller';

const router = Router();
router.get('/', estadocontroller.getEstado);

export default router;