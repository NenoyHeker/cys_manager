const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

//rutas de modificación

const clienteRoutes = require("./routes/clientes");
const equipoRoutes = require("./routes/equipos");
const eventoRoutes = require("./routes/eventos");

//configuracion del servidor
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());
app.use('/api', clienteRoutes);
app.use('/api', equipoRoutes);
app.use('/api', eventoRoutes);


// routes
app.get('/', (req, res)=> {
    res.send("Wellcome to may API");
});

//mongodb connection
mongoose.connect(
    process.env.MONGODB_URI)
    .then(()=> console.log("Connected to MongoDB Atlas"))
    .catch((error)=> console.log(error));

app.listen(port, () => console.log('server listening on port ', port));