import {Router} from "express";
import {
    addEmprestimo, deleteEmprestimo,
    getEmprestimoPelaSolicitacao,
    getEmprestimoPeloDono,
    getTabelaEmprestimos
} from "./controller.js";

const router = Router();

router.get('/', getTabelaEmprestimos);
router.get('/:b_username', getEmprestimoPelaSolicitacao);
router.get('/:o_username', getEmprestimoPeloDono);
router.post('/', addEmprestimo);
router.delete('/:b_username/:book_id', deleteEmprestimo)

export default router;
