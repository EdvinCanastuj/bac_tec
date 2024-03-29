import { Router } from "express";
import { methods as rolcontroller } from "../controllers/rol.controllers.js";

// consultar, insertar, actualizar y eliminar
const router = Router();
router.get("/", rolcontroller.getRol);
router.post("/", rolcontroller.addRol);
router.delete("/:id", rolcontroller.deleteRol);
router.put("/:id_rol", rolcontroller.updateRol);


export default router;
