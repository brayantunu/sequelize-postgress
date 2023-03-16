import { Router } from "express";
import { crearproyecto, getproyecto,deleteproyect, updateproyecto } from "../controllers/proyecto-controller.js";
const router=Router()

router.post('/proyecto',crearproyecto)
router.get('/proyecto', getproyecto)
router.delete('/proyecto/:id', deleteproyect)
router.put('/proyecto/:id',updateproyecto)
export default router
