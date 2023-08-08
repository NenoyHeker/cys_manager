const express = require("express");
const equipoOEMSchema = require("../models/equipoOEM");

const router = express.Router();

//create device
router.post('/newoem', (req, res) =>{
    const equipo = equipoOEMSchema(req.body);
    equipo.save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});

// get all devices

router.get('/getalloem', (req, res) =>{
    equipoOEMSchema
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});

// get an device

router.get('/getoem/:id', (req, res) =>{
    const { id } = req.params;
    equipoOEMSchema
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});

// update an device 
router.put('/updateoem/:id', (req, res) =>{
    const { id } = req.params;
    const {model, brand, serial, owner, problem, date} = req.body
    equipoOEMSchema
    .updateOne({_id: id}, {$set:{model, brand, serial, owner, problem, date}})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});

// delete an device

router.delete('/deleteoem/:id', (req, res) =>{
    const { id } = req.params;
    equipoOEMSchema
    .deleteOne({_id: id})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});


module.exports = router;