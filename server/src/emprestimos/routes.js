import {Router} from "express";
import {addEmprestimo, deleteEmprestimo, getEmprestimos} from "./controller.js";

const router = Router();

router.post('/', addEmprestimo);
router.get('/', getEmprestimos);
router.delete('/:id', deleteEmprestimo)

export default router;
