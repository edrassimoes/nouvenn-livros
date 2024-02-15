import {Router} from "express";
import {addLivro, deleteLivro, getLivros, updateLivro} from "./controller.js";

const router = Router();

router.post('/', addLivro);
router.get('/', getLivros);
router.put('/:id', updateLivro)
router.delete('/:id', deleteLivro)

export default router;
