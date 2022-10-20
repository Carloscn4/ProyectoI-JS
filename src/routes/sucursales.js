const express = require("express");
const sucursalSchema = require("../models/sucursales");

const router = express.Router();

//Crear sucursal
router.post('/sucursals', (req, res) => {
    const sucursal = sucursalSchema(req.body);
    sucursal
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});

//Obtener todas las sucursales
router.get('/sucursals', (req, res) => {
    sucursalSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});

module.exports = router;