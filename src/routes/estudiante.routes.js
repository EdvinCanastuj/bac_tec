import { Router } from "express";
import { methods as estudiantecontroller } from "../controllers/estudiante.controllers.js";

const router = Router();
router.get("/", estudiantecontroller.getEstudiante);
router.get("/:id_grado", estudiantecontroller.getEstudianteById);
router.post("/", estudiantecontroller.addEstudiante);
router.delete("/:id_estudiante", estudiantecontroller.deleteEstudiante);
router.put("/:id_estudiante", estudiantecontroller.updateEstudiante);

export default router;