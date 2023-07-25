const express = require("express");
const cors = require("cors");

// ! Ruta del usuarioRoutes
const usuarioRoutes = require('./routes/usuarioRoutes');

const app = express();

// Inicializar middleware cors
app.use(cors());

app.use(express.json());

app.get('/',(req,res) => {
    res.send('<a href="http://localhost:3001/api/usuarios" target="self">Servicio de API activa Usuarios</a>');
});

// ! Ruta para usuarioReoutes
app.use('/api',usuarioRoutes);

const port = 3001;

app.listen(port, () => {
    console.log("El servidor escucha en el http://localhost:" + port);
});
