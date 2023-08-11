const mongoose = require('mongoose');
const dateobj = new Date();
const options = {year:'numeric', month: '2-digit', day: '2-digit', minimumIntegerDigits: 2};
const formatdate = dateobj.toLocaleDateString(options);

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
        default: formatdate,
        required: true
    }
});

module.exports = mongoose.model('EquipoCUSTOM', equipoCUSTOMSchema);


