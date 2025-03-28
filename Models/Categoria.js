import connection from "../Utils/db.js"

class Categoria {
  constructor(Nombre, Descripcion) {
    this.Nombre = Nombre;
    this.Descripcion = Descripcion;
  }

  async getAll() {

    try {

      const [rows] = await connection.query("SELECT * FROM categorias")
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

export default Categoria;