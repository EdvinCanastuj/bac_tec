import { Router } from "express";
import { methods as estudiantecontroller } from "../controollers/grado.controller";

const router = Router();
router.get("/", estudiantecontroller.getIdGrado);

export default router;
