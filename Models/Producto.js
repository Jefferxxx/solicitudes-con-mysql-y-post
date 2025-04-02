import connection from "../Utils/db.js"

class Producto {
  constructor(Nombre, Descripcion) {
    this.Nombre = Nombre;
    this.Descripcion = Descripcion;
    this.precio = precio;
    this.categoria_id = categoria_id;

  }

  async getAll() {

    try {

      const [rows] = await connection.query("SELECT * FROM Producto")
      return rows;

    } catch (error) {
      throw new Error("Error al obtener las categorias")

    }
  }

  async create() {
    try {
      const [result] = await connection.query("INSERT INTO categorias (nombre, descripcion) VALUES (?,?)", [this.Nombre, this.Descripcion]);
      return {
        id: result.id,
        Nombre: this.Nombre,
        descripcion: this.Descripcion
      };
    } catch (error) {
      throw new Error("Error al obtener las categorias")
    }
  }
}

export default Producto;