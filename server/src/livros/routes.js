import {Router} from "express";
import {getLivroPorId, getTabelaLivros, addLivro, deleteLivro, updateLivro} from "./controller.js";

const router = Router();

router.get('/', getTabelaLivros);
router.get('/:id', getLivroPorId);
router.post('/', addLivro);
router.delete('/:id', deleteLivro)
router.put('/:id', updateLivro)

export default router;
