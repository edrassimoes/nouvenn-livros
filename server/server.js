import express from 'express'
import cors from "cors";
import livrosRoutes from "./src/livros/routes.js";
import usuariosRoutes from "./src/usuarios/routes.js"
import emprestimosRoutes from "./src/emprestimos/routes.js"

const app = express();
const port = 1234;

app.use(cors());
app.use(express.json())
app.use('/api/v1/livros', livrosRoutes);
app.use('/api/v1/usuarios', usuariosRoutes);
app.use('/api/v1/emprestimos', emprestimosRoutes);

app.listen(port, () => console.log(`Server listening on port ${port}.`));
