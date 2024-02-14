import {Router} from "express";
import {addLivro, deleteLivro, getLivros, updateLivro} from "./controller.js";

const router = Router();

router.get('/', getLivros);
router.post('/', addLivro);
router.put('/:id', updateLivro)
router.delete('/:id', deleteLivro)

export default router;
