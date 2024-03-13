const mongoose = require('mongoose');

const Dinner = mongoose.model('Dinner', {

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


module.exports = Dinner;
