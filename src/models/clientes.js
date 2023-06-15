const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClienteSchema = new Schema({

    id: int,
    name: String,
    phone: String,
    date: {type:Date,default:Date.now},

});

module.exports = mongoose.model('Cliente', ClienteSchema);


