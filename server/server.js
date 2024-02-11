import express from 'express'
import cors from "cors";
import livrosRoutes from "./src/livros/routes.js";
import usuariosRoutes from "./src/usuarios/routes.js"
import emprestimosRoutes from "./src/emprestimos/routes.js"

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json())
app.use('/api/livros', livrosRoutes);
app.use('/api/usuarios', usuariosRoutes)
app.use('/api/emprestimos', emprestimosRoutes)

app.listen(port, () => console.log(`App listening on port ${port}.`));
