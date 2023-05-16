'use strict'

const express = require('express');
const app = express();


const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Fato kato tactico desplegado\n");
});

//tal vez codigo temporal?

const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb+srv://estorenplay:oo3Pf9vr46CX3Sek@cluster0.jasnhyh.mongodb.net/?retryWrites=true&w=majority";
MongoClient.connect(uri,{useUnifiedTopology:true},(err,client) => {
    if(err) console.log("Error lanzando al fatito katito rochel");
    console.log("Fatito katito conectado correctamente a MongoDB")
});

//fin del codigo temporal???

server.listen(port,hostname,()=>{
    console.log(`Katito fatito corriendo en http://${hostname}:${port}/`);
});


app.listen(port,()=>{
    console.log('Lunching a faking gatito')
});