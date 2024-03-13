const mongoose = require('mongoose');

const Lunch = mongoose.model('Lunch', {

    name: {                                             
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
    
});


module.exports = Lunch;
