const mongoose = require("mongoose");

const ventaSchema = mongoose.Schema({
    producto:{
        type: String,
        require: true
    },
    sucursal: {
        type: String,
        require: true
    },
    user: {
        type: String,
        require: true
    },
    mPago: {
        type: String,
        require: true
    },
    timestamp: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('venta', ventaSchema);