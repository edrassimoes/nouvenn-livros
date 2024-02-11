import express from 'express'
import cors from "cors";
import livrosRoutes from "./src/livros/routes.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json())
app.use('/api/v1/livros', livrosRoutes);

const books = [
    {
        titulo: "Shakespeare: The Invention of the Human",
        autor: "Harold Bloom",
        idioma: "Inglês",
        paginas: 745,
        editora: "Riverhead Books",
        dono: "Edras",
        icone: "📕",
    },
    {
        titulo: "Onde vivem os monstros",
        autor: "Maurice Sendak",
        idioma: "Português",
        paginas: 48,
        editora: "Companhia das Letrinhas",
        dono: "Edmundo",
        icone: "📘",
    }
]

app.get("/books", (req, res) => {
    res.status(200).json(books);
});

app.listen(port, () => console.log(`App listening on port ${port}`));
