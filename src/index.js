const express = require('express');
const mongoose = require("mongoose");
//const git = require('github');
require("dotenv").config();
const userRoutes = require("./routes/user");
const rolRoutes = require("./routes/roles");
const pagoRoutes = require("./routes/pago");
const sucursalRoutes = require("./routes/sucursales");
const productoRoutes = require("./routes/productos");
const ventaRoutes = require("./routes/ventas");

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', rolRoutes);
app.use('/api', pagoRoutes);
app.use('/api', sucursalRoutes);
app.use('/api', productoRoutes);
app.use('/api', ventaRoutes);

//routes

app.get('/', (req, res) => {
    res.send("Welcome to my api");

});

//mongodb connection

mongoose.connect(process.env.MONGODB_URI).then(()=> console.log("Connected to MongoDB"))
        .catch((error)=> console.error(error));

app.listen(port, () => console.log('server listening port', port));
