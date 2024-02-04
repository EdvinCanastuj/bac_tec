import { Router } from 'express';
import { methods as estudiantecontrollers } from '../controollers/estudiante.controllers';

const router = Router();
router.get('/', estudiantecontrollers.getEstudiante);

export default router;


