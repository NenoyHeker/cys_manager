const express = require("express");
const eventoSchema = require("../models/eventos");

const router = express.Router();

//create user
router.post('/newevento', (req, res) =>{
    const evento = eventoSchema(req.body);
    evento.save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});

// get all users

router.get('/geteventos', (req, res) =>{
    eventoSchema
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});

// get an user

router.get('/getevento/:id', (req, res) =>{
    const { id } = req.params;
    eventoSchema
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});

// update an user

router.put('/updateevento/:id', (req, res) =>{
    const { id } = req.params;
    const {device, owner, piece, content, date} = req.body
    eventosSchema
    .updateOne({_id: id}, {$set:{device, owner, piece, content, date}})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});

// delete an user

router.delete('/deleteevento/:id', (req, res) =>{
    const { id } = req.params;
    eventosSchema
    .deleteOne({_id: id})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});

module.exports = router;