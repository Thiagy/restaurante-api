const mongoose = require('mongoose');

const Breakfast = mongoose.model('Breakfast', {

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


module.exports = Breakfast;
