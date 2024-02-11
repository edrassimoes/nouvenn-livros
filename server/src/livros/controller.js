import pool from "../../db.js";
import {createBook, deleteBook, getBookById, getBookByUsername, getBooks, updateBook} from "./queries.js";

export const getTabelaLivros = async (req, res) => {
    try {
        pool.connect();
        const resultado = await pool.query(getBooks);
        res.status(200).json(resultado.rows)
    } catch (e) {
        console.log(e)
    } finally {
        // fechar conexão
    }
}

export const getLivroPorId = async (req, res) => {
    const id = (req.params.id);
    try {
        pool.connect();
        const resultado = await pool.query(getBookById, [id]);
        res.status(200).json(resultado.rows);
    } catch (e) {
        console.log(e)
    } finally {
        // fechar conexão
    }
}

export const getLivroPorUsuario = async (req, res) => {
    const username = (req.params.username);
    try {
        pool.connect();
        const resultado = await pool.query(getBookByUsername, [username]);
        res.status(200).json(resultado.rows);
    } catch (e) {
        console.log(e)
    } finally {
        // fechar conexão
    }
}

export const addLivro = async (req, res) => {
    const {titulo, autor, idioma, paginas, editora, dono, icone} = req.body;
    try {
        pool.connect();
        await pool.query(createBook, [titulo, autor, idioma, paginas, editora, dono, icone]);
        res.status(201).send('Livro cadastrado com sucesso!');
    } catch (e) {
        console.log(e)
    } finally {
        // fechar conexão
    }
}

export const deleteLivro = async (req, res) => {
    const id = (req.params.id);
    try {
        pool.connect();
        await pool.query(deleteBook, [id]);
        res.status(200).send('Livro removido com sucesso.');
    } catch (e) {
        console.log(e)
    } finally {
        // fechar conexão
    }
}

export const updateLivro = async (req, res) => {
    const id = parseInt(req.params.id)
    const {titulo, autor, idioma, paginas, editora, icone} = req.body;
    try {
        pool.connect();
        await pool.query(updateBook, [titulo, autor, idioma, paginas, editora, icone, id]);
        res.status(201).send('As informações do livro foram atualizadas com sucesso.');
    } catch (e) {
        console.log(e)
    } finally {
        // fechar conexão
    }
}
