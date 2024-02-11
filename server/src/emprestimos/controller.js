import pool from "../../db.js";
import {createRelation, getBorrowerBooks, getBorrowTable, getOwnerBooks} from "./queries.js";

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
        await pool.query(createRelation, [o_username, b_username, book_id]);
        res.status(201).send('Emprestimo realizado com sucesso!');
    } catch (e) {
        console.log(e)
    } finally {
        // fechar conexão
    }
}

export const deleteEmprestimo = async (req, res) => {
    const b_username = (req.params.b_username);
    const book_id = (req.params.book_id)
    try {
        pool.connect();
        await pool.query(deleteRelation, [b_username, book_id]);
        res.status(200).send('Livro devolvido com sucesso.');
    } catch (e) {
        console.log(e)
    } finally {
        // fechar conexão
    }
}
