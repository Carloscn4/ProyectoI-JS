const mongoose = require("mongoose");

const rolSchema = mongoose.Schema({
    id_rol:{
        type: Number,
        require: true
    },
    name_rol: {
        type: String,
        require: true
    },
    codigo: {
        type: Number,
        require: true
    },
    timestamp: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('rol', rolSchema);