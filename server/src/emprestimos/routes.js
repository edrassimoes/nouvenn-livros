import {Router} from "express";
import {addEmprestimo, deleteEmprestimo, getEmprestimos} from "./controller.js";

const router = Router();

router.get('/', getEmprestimos);
router.post('/', addEmprestimo);
router.delete('/:id', deleteEmprestimo)

export default router;
