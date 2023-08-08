const express = require("express");
const equipoSchema = require("../models/equipoCUSTOM");

const router = express.Router();

//create device
router.post('/newcustom', (req, res) =>{
    const equipo = equipoSchema(req.body);
    equipo.save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});

// get all devices

router.get('/getallcustom', (req, res) =>{
    equipoSchema
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});

// get an device

router.get('/getcustom/:id', (req, res) =>{
    const { id } = req.params;
    equipoSchema
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});

// update an device CUSTOM
router.put('/updatecustom/:id', (req, res) =>{
    const { id } = req.params;
    const {cpu, ram, storage, owner, problem, date} = req.body
    equipoSchema
    .updateOne({_id: id}, {$set:{cpu, ram, storage, owner, problem, date}})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});

// delete an device

router.delete('/deletecustom/:id', (req, res) =>{
    const { id } = req.params;
    equipoSchema
    .deleteOne({_id: id})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});


module.exports = router;