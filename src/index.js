const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
require("dotenv").config();

//configuracion del servidor
const app = express();
const port = process.env.PORT || 9000;
app.use(cors());


//rutas de modificación

const clienteRoutes = require("./routes/clientes");
const customRoutes = require("./routes/equiposCUSTOM");
const multiRoutes = require("./routes/equiposMULTI");
const oemRoutes = require("./routes/equiposOEM");
const eventoRoutes = require("./routes/eventos");

// middlewares

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api', clienteRoutes);
app.use('/api', customRoutes);
app.use('/api', multiRoutes);
app.use('/api', oemRoutes);
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