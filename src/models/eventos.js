const mongoose = require('mongoose');
const dateobj = new Date();
const options = {year:'numeric', month: '2-digit', day: '2-digit', minimumIntegerDigits: 2};
const formatdate = dateobj.toLocaleDateString(options);

const EventoSchema = mongoose.Schema({


    device: {
        type:String,
        required: true
    },
    owner:{
        type:String,
        required: true
    },
    piece: {
        type:String,
        require: true
    },
    content: {
        type:String,
        require: true
    },
    date:{
        type:Date,
        default:formatdate,
        require: true
    }
});

module.exports = mongoose.model('Evento', EventoSchema);


