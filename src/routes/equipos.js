const express = require("express");
const equipoSchema = require("../models/equipo");

const router = express.Router();

//create user
router.post('/newequipo', (req, res) =>{
    const equipo = equipoSchema(req.body);
    equipo.save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});

// get all users

router.get('/getequipos', (req, res) =>{
    equipoSchema
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});

// get an user

router.get('/getequipo/:id', (req, res) =>{
    const { id } = req.params;
    equipoSchema
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});

// update an device OEM
router.put('/updateoem/:id', (req, res) =>{
    const { id } = req.params;
    const {model, brand, serial, owner, problem, date, user} = req.body
    equipoSchema
    .updateOne({_id: id}, {$set:{model, brand, serial, owner, problem, date, user}})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});

// update an device CUSTOM
router.put('/updatecustom/:id', (req, res) =>{
    const { id } = req.params;
    const {cpu, ram, storage, owner, problem, date, user} = req.body
    equipoSchema
    .updateOne({_id: id}, {$set:{cpu, ram, storage, owner, problem, date, user}})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});

// update an device MULTI

router.put('/updatemulti/:id', (req, res) =>{
    const { id } = req.params;
    const {model, brand, serial, counter, owner, problem, date, user} = req.body
    equipoSchema
    .updateOne({_id: id}, {$set:{model, brand, serial, counter, owner, problem, date, user}})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});

// delete an user

router.delete('/deleteequipo/:id', (req, res) =>{
    const { id } = req.params;
    equipoSchema
    .deleteOne({_id: id})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});


module.exports = router;