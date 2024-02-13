import {Router} from "express";
import {
    addEmprestimo, deleteEmprestimo,
    getEmprestimos, updateEmprestimo
} from "./controller.js";

const router = Router();

router.get('/', getEmprestimos);
router.post('/', addEmprestimo);
router.put('/', updateEmprestimo)
router.delete('/:id', deleteEmprestimo)

export default router;
