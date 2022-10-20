const express = require("express");
const rolSchema = require("../models/roles");

const router = express.Router();

//Crear rol
router.post('/rols', (req, res) => {
    const rol = rolSchema(req.body);
    rol
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});

//Obtener todos los roles
router.get('/rols', (req, res) => {
    rolSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});

//Obtener rol especifico

router.get("/rols/:id", (req, res) => {
    const {id} = req.params;
    rolSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});

//Actualizar rol
router.put("/rols/:id", (req, res) => {
    const {id} = req.params;
    const {id_rol, name_rol, codigo} = req.body;
    rolSchema
    .updateOne({ _id: id}, {$set:{id_rol, name_rol, codigo}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});

//Borrar usuario
router.delete("/rols/:id", (req, res) => {
    const {id} = req.params;
    rolSchema
    .remove({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});

module.exports = router;