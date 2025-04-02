import connection from "../Utils/db.js"

class Categoria {
  // constructor(Nombre, Descripcion) {
  //   this.Nombre = Nombre;
  //   this.Descripcion = Descripcion;
  // }

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

  async update(id) {

    try {
      console.log("desde la clase", this.Nombre, this.Descripcion, id);

      const [result] = await connection.query('UPDATE categorias SET nombre = ? , descripcion = ? WHERE id = ?',
        [this.Nombre, this.descripcion]);

      if (result.affectedRows === 0) {
        throw new Error("Error al obtener las categorias")
      }

      return { id, nombre: this.nombre, descripcion: this.Descripcion }

    } catch (error) {


    }

  }
}

export default Categoria;