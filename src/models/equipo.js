const mongoose = require('mongoose');

const equipoSchema = mongoose.Schema({
    //OEM
    model:{
        type: String,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    serial:{
        type: String,
        required: true
    },

    //CUSTOM
    cpu:{
        type: String,
        required: true
    },
    ram:{
        type: String,
        required: true
    },
    storage:{
        type: String,
        required: true
    },

    //MULTI
    counter:{
        type: String,
        required: true
    },

    //COMMON
    owner:{
        type: String,
        required: true
    },
    problem:{
        type: String,
        required: true
    },
    date:{
        type: String,
        default: Date.now,
        required: true
    },
    user:{
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Equipo', equipoSchema);


