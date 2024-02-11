import {Router} from "express";
import {getTable} from "./controller.js";

const livrosRoutes = Router();

livrosRoutes.get('/', getTable);

export default livrosRoutes;
