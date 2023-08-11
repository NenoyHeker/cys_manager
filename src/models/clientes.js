const mongoose = require("mongoose");
const dateobj = new Date();
const options = {year:'numeric', month: '2-digit', day: '2-digit', minimumIntegerDigits: 2};
const formatdate = dateobj.toLocaleDateString(options);

const clienteSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },    
    phone:{
        type: String,
        required: true
    },
    date:{
        type: String,
        default: formatdate,
        required: true
    }
});

module.exports = mongoose.model('Cliente', clienteSchema);
