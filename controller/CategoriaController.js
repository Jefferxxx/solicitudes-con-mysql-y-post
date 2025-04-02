import Categoria from "../Models/Categoria.js";

class CategoriaController {
  static getAllCategorias = async (req, res) => {
    const OBJCategoria = new Categoria();
    const categorias = await OBJCategoria.getAll();
    res.json(categorias);
  };

  static CreateCategoria = async (req, res) => {
    try {
      const { nombre, Descripcion } = req.body;
      const OBJCategoria = new Categoria();
      const categoria = await OBJCategoria.create(Nombre, Descripcion);
      res.status(201);
      json(categoria);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static actualizarCategoria = async (req, res) => {
    console.log(req.params);
    const { id } = req.params;

    const { nombre, Descripcion } = req.body;

    try {
      const OBJCategoria = new Categoria(nombre, Descripcion);
      const categoria = await OBJCategoria.update(nombre, Descripcion, id);
      res.json(categoria);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static actualizarParcialCategoria = (req, res) => {
    const campo = req.body;
    const { id } = req.params;
    console.log(Object.keys(campo).length);
    let sql = "UPDATE categorias SET";

    for (let cont = 0; cont < Object.keys; cont++) {
      let value = Object.keys(campo)[cont];
      sql += `SET ${value} = ${campo[value]}`;

      if (cont == Object.keys(campo).length - 1) {
        sql += "";
      } else {
        sql += ",";
      }
    }
    sql += `WHERE id= ${id}`;
    console.log(sql);
  };
}

export default CategoriaController;
