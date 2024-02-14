import pool from "../../db.js";
import {createBook, deleteBook, getBooks, updateBook} from "./queries.js";

export const getLivros = async (req, res) => {
    try {
        pool.connect();
        const resultado = await pool.query(getBooks);
        res.status(200).json(resultado.rows);
    } catch (e) {
        console.log(e);
    } finally {
        // fechar conexão
    }
}

export const addLivro = (req, res) => {
    const {titulo, autor, idioma, paginas, editora, dono, icone} = req.body;
    try {
        pool.connect();
        pool.query(createBook, [titulo, autor, idioma, paginas, editora, dono, icone]);
        res.status(201).send('Livro cadastrado com sucesso!');
    } catch (e) {
        console.log(e)
    }
}

export const deleteLivro = (req, res) => {
    const id = (req.params.id);
    try {
        pool.connect();
        pool.query(deleteBook, [id]);
        res.status(200).send('Livro removido com sucesso.');
    } catch (e) {
        console.log(e)
    } finally {
        // fechar conexão
    }
}

export const updateLivro = (req, res) => {
    const id = parseInt(req.params.id);
    try {
        pool.connect();
        pool.query(updateBook, [id]);
        res.status(201).send('As informações do livro foram atualizadas com sucesso.');
    } catch (e) {
        console.log(e)
    } finally {
        // fechar conexão
    }
}
