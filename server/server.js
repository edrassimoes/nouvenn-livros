import express from 'express'
import cors from "cors";
import livrosRoutes from "./src/livros/routes.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json())
app.use('/api/v1/livros', livrosRoutes);

app.listen(port, () => console.log(`App listening on port ${port}`));
