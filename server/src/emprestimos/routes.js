import {Router} from "express";
import {
    addEmprestimo, deleteEmprestimo,
    getEmprestimoPelaSolicitacao,
    getEmprestimoPeloDono,
    getTabelaEmprestimos, updateEmprestimo
} from "./controller.js";

const router = Router();

router.get('/', getTabelaEmprestimos);
router.get('/borrower/:b_username', getEmprestimoPelaSolicitacao);
router.get('/owner/:o_username', getEmprestimoPeloDono);
router.post('/', addEmprestimo);
router.post('/aprovar', updateEmprestimo)
router.delete('/remover/:book_id', deleteEmprestimo)

export default router;
