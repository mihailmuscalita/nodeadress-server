const moongose = require('mongoose');

const Adress = moongose.model('Adress', new moongose.Schema({
    country: {
        type: String,
        maxLength: 50,
        minLength: 2,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true,
        minLength: 5
    }
}));


exports.Adress = Adress;