import pool from "../../db.js";
import {
    createRelation, deleteRelation,
    getTable, updateRelation
} from "./queries.js";

export const getEmprestimos = async (req, res) => {
    try {
        pool.connect();
        const resultado = await pool.query(getTable);
        res.status(200).json(resultado.rows)
    } catch (e) {
        console.log(e)
    } finally {
        // fechar conexão
    }
}

export const addEmprestimo = (req, res) => {
    const {o_username, b_username, book_id} = req.body;
    try {
        pool.connect();
        pool.query(createRelation, [o_username, b_username, book_id, false]);
        res.status(201).send('Emprestimo solicitado com sucesso.');
    } catch (e) {
        console.log(e)
    } finally {
        // fechar conexão
    }
}

export const updateEmprestimo = (req, res) => {
    const {status, id} = req.body;
    try {
        pool.connect();
        pool.query(updateRelation, [status, id]);
        res.status(201).send('Status do emprestimo atualizado com sucesso.');
    } catch (e) {
        console.log(e)
    } finally {
        // fechar conexão
    }
}

export const deleteEmprestimo = (req, res) => {
    const id = (req.params.id)
    try {
        pool.connect();
        pool.query(deleteRelation, [id]);
        res.status(200).send('Emprestimo encerrado ou negado.');
    } catch (e) {
        console.log(e)
    } finally {
        // fechar conexão
    }
}
