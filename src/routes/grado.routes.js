import { Router } from "express";
import { methods as estudiantecontroller } from "../controllers/grado.controller.js";

const router = Router();
router.get("/", estudiantecontroller.getIdGrado);

export default router;
