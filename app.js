import express from "express";
import bodyParser from "body-parser";
import categoriasRoutes from "./rutas/categoriasRoutes.js";
import Producto_Routes from "./rutas/Productos_Routes.js";

const app = express();
app.use(bodyParser.json());

app.use(express.urlencoded({ "extended": true }));

app.use('/categorias', categoriasRoutes);

app.use('/productos', Producto_Routes);



app.listen(3000, () => {
  console.log("hola")
});