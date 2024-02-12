import {Router} from "express";
import {
    addEmprestimo, deleteEmprestimo,
    getEmprestimoPelaSolicitacao,
    getEmprestimoPeloDono,
    getTabelaEmprestimos
} from "./controller.js";

const router = Router();

router.get('/', getTabelaEmprestimos);
router.get('/borrower/:b_username', getEmprestimoPelaSolicitacao);
router.get('/owner/:o_username', getEmprestimoPeloDono);
router.post('/', addEmprestimo);
router.delete('/devolver/:b_username/:book_id', deleteEmprestimo)

export default router;
