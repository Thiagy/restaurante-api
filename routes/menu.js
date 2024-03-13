const router = require('express').Router();
const Menu = require('../models/Menu');

//Rota que cria item de cardápio.
router.post('/menu', async (req, res) => {

  const { name, price, image } = req.body;

  if (!name || !price || !image) {

    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });

  }

  try {

    const item = await Menu.findOne({ image });

    if (item) {

      return res.status(409).json({ message: "Já existe um prato com essa imagem." });

    } else {

      const item = {
        name,
        price,
        image
      };

      const itemCreated = await Menu.create(item);

      res.status(200).json({ message: "Fruta criada com sucesso.", itemCreated });

    }

  } catch (err) {

    res.status(500).json({ message: `Erro interno no servidor: ${err}`});

  }

});

//Rota que obtém uma item de menu 
router.get('/menu', async (req, res) => {

  try {

    const itemList = await Menu.find();

    res.status(200).json(itemList);

  } catch (err) {

    res.status(500).json({ message: "Houve um erro interno no servidor" });

  }

});



module.exports = router