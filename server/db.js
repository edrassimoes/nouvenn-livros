import pg from "pg";

const {Pool} = pg;

// Podem ser mudadas para variaveis de ambiente futuramente.
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "postgres",
    port: 5432,
});

export default pool;