import pool from "../../db.js";
import {createBook, deleteBook, getBooks, updateBook} from "./queries.js";

export const getLivros = async (req, res) => {
    let client;
    try {
        client = await pool.connect();
        const resultado = await client.query(getBooks);
        res.status(200).json(resultado.rows);
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Erro ao buscar livros.' });
    } finally {
        if (client) {
            client.release(); // Libere a conexão de volta ao pool
        }
    }
};

export const addLivro = async (req, res) => {
    let client;
    const { titulo, autor, idioma, paginas, editora, dono, icone } = req.body;
    try {
        client = await pool.connect();
        await client.query(createBook, [titulo, autor, idioma, paginas, editora, dono, icone]);
        res.status(201).json({ message: 'Livro cadastrado com sucesso!' });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Erro ao cadastrar livro.' });
    } finally {
        if (client) {
            client.release(); // Libere a conexão de volta ao pool
        }
    }
};

export const deleteLivro = async (req, res) => {
    let client;
    const id = req.params.id;
    try {
        client = await pool.connect();
        await client.query(deleteBook, [id]);
        res.status(200).json({ message: 'Livro removido com sucesso.' });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Erro ao remover livro.' });
    } finally {
        if (client) {
            client.release(); // Libere a conexão de volta ao pool
        }
    }
};

export const updateLivro = async (req, res) => {
    let client;
    const id = req.params.id;
    try {
        client = await pool.connect();
        await client.query(updateBook, [id]);
        res.status(201).json({ message: 'As informações do livro foram atualizadas com sucesso.' });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Erro ao atualizar informações do livro.' });
    } finally {
        if (client) {
            client.release(); // Libere a conexão de volta ao pool
        }
    }
};
