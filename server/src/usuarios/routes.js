import {Router} from "express";
import {addUsuario, getUsuarios} from "./controller.js";

const router = Router();

router.post('/', addUsuario);
router.get('/', getUsuarios);

export default router;
