const express = require("express");
const pagoSchema = require("../models/pago");

const router = express.Router();

//Crear pago
router.post('/pagos', (req, res) => {
    const pago = pagoSchema(req.body);
    pago
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});

//Actualizar pago
router.put("/pagos/:id", (req, res) => {
    const {id} = req.params;
    const {mPago, name, codigo} = req.body;
    pagoSchema
    .updateOne({ _id: id}, {$set:{mPago, name, codigo}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});

//Obtener los pagos
router.get('/pagos', (req, res) => {
    pagoSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});

module.exports = router;