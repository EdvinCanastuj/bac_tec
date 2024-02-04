import { Router } from "express";
import { methods as estudiantecontroller } from "../controollers/estudiante.controllers";

const router = Router();
router.get("/", estudiantecontroller.getEstudiante);
router.post("/", estudiantecontroller.addEstudiante);
router.delete("/:id_estudiante", estudiantecontroller.deleteEstudiante);
router.put("/:id_estudiante", estudiantecontroller.updateEstudiante);

export default router;