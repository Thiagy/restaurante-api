const router = require('express').Router();
const Reservation = require('../models/Reservation');

//Rota que cria reserva de mesa da categoria café da manhã.
router.post('/reservation', async (req, res) => {

  const { nome, email, celular, data, horario, quantidadePessoas } = req.body;

  if (!nome || !email || !celular || !data || !horario || !quantidadePessoas) {

    return res.status(400).json({ message: 'Todos os campos são obrigatórios.'});

  }

  try {

    const item = {
      nome, 
      email, 
      celular, 
      data, 
      horario, 
      quantidadePessoas
    };

    const itemCreated = await Reservation.create(item);

    res.status(200).json({ message: "Reserva de mesa criada com sucesso.", itemCreated });

  } catch (err) {

    res.status(500).json({ message: `Erro interno no servidor: ${err}`});

  }

});

//Rota que obtém uma lista de reservas de mesa. 
router.get('/reservation', async (req, res) => {

  try {

    const itemList = await Reservation.find();

    res.status(200).json(itemList);

  } catch (err) {

    res.status(500).json({ message: "Houve um erro interno no servidor" });

  }

});



module.exports = router