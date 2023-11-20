import { Router } from "express";
import { methods as usuariocontroller } from "../controollers/usuario.controllers";

const router = Router();
router.get("/", usuariocontroller.getUsuario);


export default router;

