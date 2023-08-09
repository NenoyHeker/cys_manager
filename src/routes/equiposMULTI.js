const express = require("express");
const equipoSchema = require("../models/equipoMULTI");

const router = express.Router();

//create device

router.post('/newmulti', (req, res) =>{
    const equipo = equipoSchema(req.body);
    equipo.save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});

// get all devices

router.get('/getallmulti', (req, res) =>{
    equipoSchema
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});

// get a device

router.get('/getmulti/:id', (req, res) =>{
    const { id } = req.params;
    equipoSchema
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});

// update a device
router.put('/updatemulti/:id', (req, res) =>{
    const { id } = req.params;
    const {model, brand, serial, counter, owner, problem, date} = req.body
    equipoSchema
    .updateOne({_id: id}, {$set:{model, brand, serial, counter, owner, problem, date}})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});

// delete a device

router.delete('/deletemulti/:id', (req, res) =>{
    const { id } = req.params;
    equipoSchema
    .deleteOne({_id: id})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});

module.exports = router;