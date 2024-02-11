import pool from "../../db.js";

export const getTable = async (req, res) => {
    try {
        pool.connect();
        const resultado = await pool.query();
        res.status(200).json(resultado.rows)
    } catch (e) {
       console.log(e)
    } finally {
        // fechar conexão
    }
}


