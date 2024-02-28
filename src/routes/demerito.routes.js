import { Router } from "express";
import { methods as demeritocontroller } from "../controllers/demerito.controllers.js";

const router = Router();
router.get("/", demeritocontroller.getDemerito);
router.get("/demeritos", demeritocontroller.getDemeritos);
router.post("/", demeritocontroller.addDemerito);
router.delete("/:id_demerito", demeritocontroller.deleteDemerito);
router.put("/:id_demerito", demeritocontroller.updatedemerito);

export default router;