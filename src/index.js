'use strict'

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mongoose = require('mongoose');


const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;





const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Fato kato tactico desplegado\n");
});

const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb+srv://estorenplay:oo3Pf9vr46CX3Sek@cluster0.jasnhyh.mongodb.net/?retryWrites=true&w=majority";
MongoClient.connect(uri,{useUnifiedTopology:true},(err,client) => {
    if(err) console.log("Error lanzando al fatito katito rochel");
    console.log("Fatito katito conectado correctamente a MongoDB")
});

server.listen(port,hostname,()=>{
    console.log(`Katito fatito corriendo en http://${hostname}:${port}/`);
});

const dbName = "dbtest01";
var url =

//Carga del body parser, analizador de bodys a travez de la URL

app.use(bodyParser.urlencoded({extended: false}));


//Peticiones -> JSON

app.use(bodyParser.json());

//Activar CORS para permitir peticiones AJAX y HTTP desde el frontend
app.use((req,res) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETED');
    res.header('Allow','GET,POST, OPTIONS, PUT, DELETE');
    next();
});
