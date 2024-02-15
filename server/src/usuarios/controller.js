import pool from "../../db.js";
import {
    createUser,
    getUsers,
} from "./queries.js";

export const getUsuarios = async (req, res) => {
    let client;
    try {
        client = await pool.connect();
        const resultado = await client.query(getUsers);
        res.status(200).json(resultado.rows);
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Erro ao buscar usuários.' });
    } finally {
        if (client) {
            client.release(); // Libere a conexão de volta ao pool
        }
    }
};

export const addUsuario = async (req, res) => {
    let client;
    const { username, email, password } = req.body;
    try {
        client = await pool.connect();
        await client.query(createUser, [username, email, password]);
        res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Erro ao cadastrar usuário.' });
    } finally {
        if (client) {
            client.release(); // Libere a conexão de volta ao pool
        }
    }
};
