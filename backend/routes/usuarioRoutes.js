const express = require("express");
const usuarioControllers = require("../controllers/usuarioControllers");

const router = express.Router();

router.get('/usuarios',usuarioControllers.obtenerUsuarios);

module.exports = router;
