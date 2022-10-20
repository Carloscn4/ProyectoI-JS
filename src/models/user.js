const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    id_user:{
        type: Number,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    rol: {
        type: String,
        require: true
    },
    timestamp: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('User', userSchema);