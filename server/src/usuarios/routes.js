import {Router} from "express";
import {addUsuario, deleteUsuario, getTabelaUsuarios, getUsuarioPorUsername, updateUsuario} from "./controller.js";

const router = Router();

router.get('/', getTabelaUsuarios);
router.get('/login/:username', getUsuarioPorUsername);
router.post('/', addUsuario);
router.delete('/:username', deleteUsuario)
router.put('/:username', updateUsuario)

export default router;
