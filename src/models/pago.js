const mongoose = require("mongoose");

const pagoSchema = mongoose.Schema({
    mPago:{
        type: String,
        require: true
    },
    name: {
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

module.exports = mongoose.model('pago', pagoSchema);