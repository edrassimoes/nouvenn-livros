import pool from "../../db.js";
import { createRelation, deleteRelation, getTable } from "./queries.js";

export const addEmprestimo = async (req, res) => {
    let client;
    const { o_username, b_username, book_id } = req.body;
    try {
        client = await pool.connect();
        await client.query(createRelation, [o_username, b_username, book_id]);
        res.status(201).json({ message: 'Empréstimo solicitado com sucesso.' });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Erro ao solicitar empréstimo.' });
    } finally {
        if (client) {
            client.release(); // Libere a conexão de volta ao pool
        }
    }
};

export const getEmprestimos = async (req, res) => {
    let client;
    try {
        client = await pool.connect();
        const resultado = await client.query(getTable);
        res.status(200).json(resultado.rows);
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Erro ao buscar empréstimos.' });
    } finally {
        if (client) {
            client.release(); // Libere a conexão de volta ao pool
        }
    }
};

export const deleteEmprestimo = async (req, res) => {
    let client;
    const id = req.params.id;
    try {
        client = await pool.connect();
        await client.query(deleteRelation, [id]);
        res.status(200).json({ message: 'Empréstimo encerrado ou negado.' });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Erro ao encerrar empréstimo.' });
    } finally {
        if (client) {
            client.release(); // Libere a conexão de volta ao pool
        }
    }
};
