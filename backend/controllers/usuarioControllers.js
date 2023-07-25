const connection = require("../db");

// ! Funcion para visualizar a todos los usuarios

const obtenerUsuarios = (req, res) => {
  connection.query("SELECT * FROM usuarios", (error, result) => {
    if (error) {
      console.error("Error al extraer los registro de usuarios", error);
      res.status(500).json({ error: "Error al obtener registros" });
    } else {
      res.json(result);
    }
  });
};

const obtenerUsuariosId = (req, res) => {
  const id_usuarios = req.params.id_usuarios;

  connection.query(
    "SELECT * FROM usuarios WHERE id_usuarios = ?",
    id_usuarios,
    (error, result) => {
      if (error) {
        console.error("Error al extraer los registro de usuarios", error);
        res.status(500).json({ error: "Error al obtener registros" });
      } else {
        res.json(result);
      }
    }
  );
};

const agregarUsuarios = (req, res) => {
  const {
    nombre,
    apellido_paterno,
    apellido_materno,
    edad,
    numero_telefonico,
    email,
    direccion,
    fotografia,
  } = req.body;

  connection.query(
    "INSERT INTO usuarios (nombre,apellido_paterno,apellido_materno,edad,numero_telefonico,email,direccion,fotografia) VALUES (?,?,?,?,?,?,?,?)",
    [
      nombre,
      apellido_paterno,
      apellido_materno,
      edad,
      numero_telefonico,
      email,
      direccion,
      fotografia,
    ],
    (error, result) => {
      if (error) {
        console.error("Error al agregar un usuario", error);
        res.status(500).json({ error: "Error al agregar usuarios" });
      } else {
        res.json({ message: "Usuario agregado" });
      }
    }
  );
};

const eliminarUsuariosId = (req, res) => {
  const id_usuarios = req.params.id_usuarios;

  connection.query(
    "DELETE FROM usuarios WHERE id_usuarios = ?",
    id_usuarios,
    (error, result) => {
      if (error) {
        console.error("Error al eliminar los registro de usuarios", error);
        res.status(500).json({ error: "Error al eliminar registros" });
      } else {
        res.json({ message: "Usuario eliminado" });
      }
    }
  );
};

const actualizarUsuariosId = (req, res) => {
  const id_usuarios = req.params.id_usuarios;
  const {
    nombre,
    apellido_paterno,
    apellido_materno,
    edad,
    numero_telefonico,
    email,
    direccion,
    fotografia,
  } = req.body;

  connection.query(
    "UPDATE usuarios SET nombre = ?,apellido_paterno = ?,apellido_materno = ?,edad = ?,numero_telefonico = ?,email = ?,direccion = ?,fotografia = ? WHERE id_usuarios = ?",
    [
      nombre,
      apellido_paterno,
      apellido_materno,
      edad,
      numero_telefonico,
      email,
      direccion,
      fotografia,
      id_usuarios],
    (error, result) => {
      if (error) {
        console.error("Error al actualizar un usuario", error);
        res.status(500).json({ error: "Error al actualizar un usuario" });
      } else {
        res.json({ message: "Usuario actualizado" });
      }
    }
  );
};

module.exports = {
  obtenerUsuarios,
  obtenerUsuariosId,
  agregarUsuarios,
  eliminarUsuariosId,
  actualizarUsuariosId,
};
