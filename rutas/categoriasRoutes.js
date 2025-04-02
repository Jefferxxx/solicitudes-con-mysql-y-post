import express from "express";
import CategoriaController from "../controller/categoriaController.js";
import { validarCategoria } from "../middlewares/validarCategoria.js";

const router = express.Router();

router.get("/", validarCategoria, CategoriaController.getAllCategorias);

router.post("/", validarCategoria, CategoriaController.CreateCategoria);

router.put("/:id", CategoriaController.actualizarCategoria);

router.patch("/:id", CategoriaController.actualizarParcialCategoria);

export default router;
