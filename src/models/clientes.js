const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EquipoSchema = new Schema({

    brand : String,
    serial: String,
    counter: String,
    parts: String,
    problem: String,
    type: String,
    date: {type:Date,default:Date.now},
    content: String,
    author:String
});

module.exports = mongoose.model('Article', EquipoSchema);


