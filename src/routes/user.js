const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

//Crear usuario
router.post('/users', (req, res) => {
    const user = userSchema(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});

//Obtener todos los usuarios
router.get('/users', (req, res) => {
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});

//Obtener usuario especifico

router.get("/users/:id", (req, res) => {
    const {id} = req.params;
    userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});

//Actualizar usuario
router.put("/users/:id", (req, res) => {
    const {id} = req.params;
    const {id_user, name, age, rol} = req.body;
    userSchema
    .updateOne({ _id: id}, {$set:{id_user, name, age, rol}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});

//Borrar usuario
router.delete("/users/:id", (req, res) => {
    const {id} = req.params;
    userSchema
    .remove({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});

module.exports = router;
