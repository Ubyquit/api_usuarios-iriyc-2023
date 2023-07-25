const connection = require("../db");

// ! Funcion para visualizar a todos los usuarios

const obtenerUsuarios = (req, res) => {
  connection.query("SELECT * FROM usuarios", (error, result) => {
    if (error) {
      console.error("Error al extraer los registro de usuarios", error);
      res.status(500).json({error:"Error al obtener registros"});
    }else{
        res.json(result);
    }
  });
};

const obtenerUsuariosId = (req, res) => {
  const id_usuarios = req.params.id_usuarios
  
  connection.query("SELECT * FROM usuarios WHERE id_usuarios = ?",id_usuarios, (error, result) => {
    if (error) {
      console.error("Error al extraer los registro de usuarios", error);
      res.status(500).json({error:"Error al obtener registros"});
    }else{
        res.json(result);
    }
  });
};



/*
INSERT INTO `usuarios` (`id_usuarios`, `nombre`, `apellido_paterno`, `apellido_materno`, `edad`, `numero_telefonico`, `email`, `direccion`, `fotografia`) VALUES (NULL, 'Luis Fernando', 'Villafaña', 'Rejón', '32', '9982328666', 'luisvr@gmail.com', 'Cancún, Qroo.', 'luis.jpeg');
*/

module.exports = {
    obtenerUsuarios,
    obtenerUsuariosId,
}
