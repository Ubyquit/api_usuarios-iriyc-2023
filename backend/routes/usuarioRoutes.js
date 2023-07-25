const express = require("express");
const usuarioControllers = require("../controllers/usuarioControllers");

const router = express.Router();

router.get('/usuarios',usuarioControllers.obtenerUsuarios);
router.get('/usuarios/:id_usuarios',usuarioControllers.obtenerUsuariosId);

module.exports = router;
