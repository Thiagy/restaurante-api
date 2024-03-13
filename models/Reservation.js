const mongoose = require('mongoose');

const Reservation = mongoose.model('Reservation', {

    nome: {                                             
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    celular: {
        type: String,
        required: true
    },
    data: {
        type: String,
        required: true
    },
    horario: {
        type: String,
        required: true
    },
    quantidadePessoas: {
        type: String,
        required: true
    }
});

module.exports = Reservation;
