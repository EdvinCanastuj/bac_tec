import { Router } from 'express';
import { methods as razoncontroller } from '../controollers/razon.controllers';

const router = Router();

router.get('/', razoncontroller.getRazon);

export default router;