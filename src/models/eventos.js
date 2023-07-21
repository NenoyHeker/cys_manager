const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EquipoSchema = new Schema({

    eventNum: {
        type: String,
        required: true
    },
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
        default:Date.now
    },
    user: {
        type:String,
        required: true
    }
});

module.exports = mongoose.model('Article', EquipoSchema);


