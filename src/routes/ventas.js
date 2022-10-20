const express = require("express");
const ventaSchema = require("../models/ventas");

const router = express.Router();

//Crear ventas
router.post('/ventas', (req, res) => {
    const venta = ventaSchema(req.body);
    venta
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});
//Obtener todas las ventaas
router.get('/ventas', (req, res) => {
    ventaSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});

module.exports = router;