const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EquipoSchema = new Schema({

    id: String,
    serial: String,
    counter: String,
    parts: String,
    problem: String,
    type: String,
    content: String,
    date: {type:Date,default:Date.now},
    
    
});

module.exports = mongoose.model('Article', EquipoSchema);


