import pool from "../../db.js";
import {
    createRelation, deleteRelation,
    getBorrowerBooks,
    getBorrowTable,
    getOwnerBooks,
    updateRelation
} from "./queries.js";

export const getTabelaEmprestimos = async (req, res) => {
    try {
        pool.connect();
        const resultado = await pool.query(getBorrowTable);
        res.status(200).json(resultado.rows)
    } catch (e) {
        console.log(e)
    } finally {
        // fechar conexão
    }
}

export const getEmprestimoPelaSolicitacao = async (req, res) => {
    const b_username = (req.params.b_username);
    try {
        pool.connect();
        const resultado = await pool.query(getBorrowerBooks, [b_username]);
        res.status(200).json(resultado.rows);
    } catch (e) {
        console.log(e)
    } finally {
        // fechar conexão
    }
}

export const getEmprestimoPeloDono = async (req, res) => {
    const o_username = (req.params.o_username);
    try {
        pool.connect();
        const resultado = await pool.query(getOwnerBooks, [o_username]);
        res.status(200).json(resultado.rows);
    } catch (e) {
        console.log(e)
    } finally {
        // fechar conexão
    }
}

export const addEmprestimo = async (req, res) => {
    const {o_username, b_username, book_id} = req.body;
    try {
        pool.connect();
        await pool.query(createRelation, [o_username, b_username, book_id, false]);
        res.status(201).send('Emprestimo realizado com sucesso!');
    } catch (e) {
        console.log(e)
    } finally {
        // fechar conexão
    }
}

export const updateEmprestimo = async (req, res) => {
    const {status, id} = req.body;
    try {
        pool.connect();
        await pool.query(updateRelation, [status, id]);
        res.status(201).send('Status do emprestimo atualizado com sucesso.');
    } catch (e) {
        console.log(e)
    } finally {
        // fechar conexão
    }
}

export const deleteEmprestimo = async (req, res) => {
    const book_id = (req.params.book_id)
    try {
        pool.connect();
        await pool.query(deleteRelation, [book_id]);
        res.status(200).send('Solicitação de empréstimo negada.');
    } catch (e) {
        console.log(e)
    } finally {
        // fechar conexão
    }
}
