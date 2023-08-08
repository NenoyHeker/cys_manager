const mongoose = require('mongoose');

const equipoOEMSchema = mongoose.Schema({
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
    }
});

module.exports = mongoose.model('EquipoOEM', equipoOEMSchema);


