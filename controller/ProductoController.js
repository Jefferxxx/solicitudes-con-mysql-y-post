import Categoria from "../Models/Producto.js";

class ProductoController {
  static getAllProducto = async (req, res) => {
    const OBJCategoria = new Categoria();
    const categorias = await OBJCategoria.getAll();
    res.json(categorias);
  };

  static CreateProducto = async (req, res) => {
    try {
      const OBJCategoria = new categoria();
      const categoria = await OBJCategoria.create(Nombre, Descripcion);
      res.status(201);
      json(categoria);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}

export default ProductoController;
