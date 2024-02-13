import {Router} from "express";
import {addUsuario, deleteUsuario, getUsuarios, updateUsuario} from "./controller.js";

const router = Router();

router.get('/', getUsuarios);
// router.post('/', addUsuario);
// router.delete('/', deleteUsuario)
// router.put('/', updateUsuario)

export default router;
