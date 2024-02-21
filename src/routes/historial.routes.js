import { Router } from "express";   
import { methods as historialcontroller } from "../controollers/historial.controllers";

const router = Router();
router.get("/", historialcontroller.getHistorial);

export default router;