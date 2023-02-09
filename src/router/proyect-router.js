import { Router } from "express";
import { crearproyecto } from "../controllers/proyecto-controller.js";
const router=Router()

router.post('proyect',crearproyecto)

export default router
