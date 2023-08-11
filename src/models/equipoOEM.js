const mongoose = require('mongoose');
const dateobj = new Date();
const options = {year:'numeric', month: '2-digit', day: '2-digit', minimumIntegerDigits: 2};
const formatdate = dateobj.toLocaleDateString(options);

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
        default: formatdate,
        required: true
    }
});

module.exports = mongoose.model('EquipoOEM', equipoOEMSchema);


