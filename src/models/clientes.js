const mongoose = require("mongoose");

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
        default:Date.now,
        required: true
    }
});

module.exports = mongoose.model('Cliente', clienteSchema);
