const mongoose = require('mongoose');

const equipoCUSTOMSchema = mongoose.Schema({
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

module.exports = mongoose.model('EquipoCUSTOM', equipoCUSTOMSchema);


