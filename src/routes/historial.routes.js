import { Router } from "express";   
import { methods as historialcontroller } from "../controllers/historial.controllers.js";

const router = Router();
router.get("/", historialcontroller.getHistorial);

export default router;