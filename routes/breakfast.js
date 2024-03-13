const router = require('express').Router();
const Breakfast = require('../models/Breakfast');


//Rota que cria item de cardápio da categoria café da manhã.
router.post('/breakfast', async (req, res) => {

  const { name, price, image } = req.body;

  if (!name || !price || !image) {

    return res.status(400).json({ message: 'Todos os campos são obrigatórios.'});

  }

  try {

    const item = await Breakfast.findOne({ image });

    if (item) {

      return res.status(409).json({ message: "Já existe um prato com essa imagem."});

    } else {

      const item = {
        name,
        price,
        image
      };

      const itemCreated = await Breakfast.create(item);

      res.status(200).json({ message: "Item de cardápio criada com sucesso.", itemCreated });

    }

  } catch (err) {

    res.status(500).json({ message: `Erro interno no servidor: ${err}`});

  }

});

//Rota que obtém um item de menu de café da manhã. 
router.get('/breakfast', async (req, res) => {

  try {

    const itemList = await Breakfast.find();

    res.status(200).json(itemList);

  } catch (err) {

    res.status(500).json({ message: "Houve um erro interno no servidor" });

  }

});



module.exports = router