const mongoose = require("mongoose");

const productoSchema = mongoose.Schema({
    nombre:{
        type: String,
        require: true
    },
    sku: {
        type: String,
        require: true
    },
    precio: {
        type: Number,
        require: true
    },
    stock: {
        type: String,
        require: true
    },
    timestamp: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('producto', productoSchema);