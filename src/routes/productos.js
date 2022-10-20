const express = require("express");
const productoSchema = require("../models/productos");

const router = express.Router();

//Crear productos
router.post('/productos', (req, res) => {
    const producto = productoSchema(req.body);
    producto
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});

//Actualizar producto
router.put("/productos/:id", (req, res) => {
    const {id} = req.params;
    const {nombre, sku, precio, stock} = req.body;
    productoSchema
    .updateOne({ _id: id}, {$set:{nombre, sku, precio, stock}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});

//Obtener productos
router.get('/productos', (req, res) => {
    productoSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});

module.exports = router;