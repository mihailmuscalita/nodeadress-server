const mongoose = require('mongoose');

const AdressDetails = new mongoose.model('AdressDetails', new mongoose.Schema({

    street: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    familyname: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
    adress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Adress'
    }

}));

exports.AdressDetails = AdressDetails;