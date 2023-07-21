const express = require("express");
const clienteSchema = require("../models/clientes");

const router = express.Router();

//create user
router.post('/newcliente', (req, res) =>{
    const cliente = clienteSchema(req.body);
    cliente.save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});

// get all users

router.get('/getclientes', (req, res) =>{
    clienteSchema
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});

// get an user

router.get('/getcliente/:id', (req, res) =>{
    const { id } = req.params;
    clienteSchema
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});

// update an user

router.put('/updatecliente/:id', (req, res) =>{
    const { id } = req.params;
    const {name, lastname, phone, date} = req.body
    clienteSchema
    .updateOne({_id: id}, {$set:{name, lastname, phone, date}})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});

// delete an user

router.delete('/deletecliente/:id', (req, res) =>{
    const { id } = req.params;
    clienteSchema
    .deleteOne({_id: id})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});

module.exports = router;