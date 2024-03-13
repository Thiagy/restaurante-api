const mongoose = require('mongoose');

const Menu = mongoose.model('Menu', {

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


module.exports = Menu;
