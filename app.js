import express from "express";
import bodyParser from "body-parser";
import categoriasRoutes from "./rutas/categoriasRoutes.js";


//se crea la isntancia  express
const app = express();
app.use(bodyParser.json());

app.use(express.urlencoded({ "extended": true }));

app.use('/categorias', categoriasRoutes);



app.listen(3000, () => {
  console.log("hola")
});