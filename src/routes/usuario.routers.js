import { Router } from "express";
import { methods as usuariocontroller } from "../controollers/usuario.controllers";

const router = Router();
router.get("/", usuariocontroller.getUsuario);
router.post("/", usuariocontroller.addUsuario);
<<<<<<< HEAD
router.delete("/:id_usuario", usuariocontroller.deleteUsuario);
router.put("/:id_usuario", usuariocontroller.updateUsuario);
=======

>>>>>>> 86f7440f19a5362b58f7ba5e28016ba5192f7924

export default router;

