const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "usuarios_iriyc",
});

connection.connect((error) => {
  if (error) {
    console.error("Error al conectar al servidor de la base de datos: ", error);
  } else {
    console.log("Conexión exitosa el servicio de la base de datos.");
  }
});

module.exports = connection;