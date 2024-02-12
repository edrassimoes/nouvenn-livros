import {Router} from "express";
import {getLivroPorId, getTabelaLivros, addLivro, deleteLivro, updateLivro, getLivroPorUsuario} from "./controller.js";

const router = Router();

router.get('/', getTabelaLivros);
router.get('/livro/:id', getLivroPorId);
router.get('/conta/:username', getLivroPorUsuario);
router.post('/', addLivro);
router.delete('/:id', deleteLivro)
router.put('/:id', updateLivro)

export default router;
