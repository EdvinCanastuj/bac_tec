import { Router } from "express";
import { methods as usuariocontroller } from "../controollers/usuario.controllers";

const router = Router();
router.get("/", usuariocontroller.getUsuario);
router.post("/", usuariocontroller.addUsuario);
router.delete("/:id_usuario", usuariocontroller.deleteUsuario);
router.put("/:id_usuario", usuariocontroller.updateUsuario);

export default router;

