const express = require("express");
const usuarioControllers = require("../controllers/usuarioControllers");

const router = express.Router();

router.get('/usuarios',usuarioControllers.obtenerUsuarios);
router.get('/usuarios/:id_usuarios',usuarioControllers.obtenerUsuariosId);
router.post('/usuarios',usuarioControllers.agregarUsuarios);

module.exports = router;
