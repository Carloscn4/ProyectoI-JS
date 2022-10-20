const mongoose = require("mongoose");

const sucursalSchema = mongoose.Schema({
    nombre:{
        type: String,
        require: true
    },
    codigo: {
        type: String,
        require: true
    },
    telefono: {
        type: Number,
        require: true
    },
    direccion: {
        type: String,
        require: true
    },
    timestamp: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('sucursal', sucursalSchema);