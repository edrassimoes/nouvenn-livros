import pool from "../../db.js";
import {
    createUser,
    deleteUser,
    getUserByUsername,
    getUsers,
    updateUser
} from "./queries.js";

export const getTabelaUsuarios = async (req, res) => {
    try {
        pool.connect();
        const resultado = await pool.query(getUsers);
        res.status(200).json(resultado.rows)
    } catch (e) {
        console.log(e)
    } finally {
        // fechar conexão
    }
}

export const getUsuarioPorUsername = async (req, res) => {
    const username = (req.params.username);
    try {
        pool.connect();
        const resultado = await pool.query(getUserByUsername, [username]);
        if (resultado.rows.length === 0) {
            res.status(404).send('Usuário não encontrado.');
        } else {
            res.status(200).json(resultado.rows);
        }
    } catch (e) {
        console.log(e)
    } finally {
        // fechar conexão
    }
}

export const addUsuario = async (req, res) => {
    const {username, email, password} = req.body;
    try {
        pool.connect();
        await pool.query(createUser, [username, email, password]);
        res.status(201).send('Usuário cadastrado com sucesso!');
    } catch (e) {
        console.log(e)
    } finally {
        // fechar conexão
    }
}

export const deleteUsuario = async (req, res) => {
    const username = (req.params.username);
    try {
        pool.connect();
        await pool.query(deleteUser, [username]);
        res.status(200).send('Usuário removido com sucesso.');
    } catch (e) {
        console.log(e)
    } finally {
        // fechar conexão
    }
}

export const updateUsuario = async (req, res) => {
    const username = (req.params.username)
    const {email, password} = req.body;
    try {
        pool.connect();
        await pool.query(updateUser, [email, password, username]);
        res.status(201).send('As informações do usuário foram atualizadas com sucesso.');
    } catch (e) {
        console.log(e)
    } finally {
        // fechar conexão
    }
}
