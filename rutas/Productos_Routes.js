import express from "express";
import ProductoController from "../controller/ProductoController.js";

const router = express.Router();

router.get('/', ProductoController.getAllCategorias);

router.post('/', ProductoController.createProducto);



export default router;
