import { Router } from "express";
import { methods as demeritocontroller } from "../controollers/demerito.controllers";

const router = Router();
router.get("/", demeritocontroller.getDemerito);
router.post("/", demeritocontroller.addDemerito);
router.delete("/:id", demeritocontroller.deleteDemerito);
router.put("/:id_demerito", demeritocontroller.updatedemerito);

export default router;