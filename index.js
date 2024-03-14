const express = require('express');
const app = express();

const mongoose = require('mongoose');
require('dotenv').config();

const cors = require('cors');

const menu = require('./routes/menu');
const breakfast = require('./routes/breakfast');
const lunch = require('./routes/lunch');
const dinner = require('./routes/dinner');
const reservation = require('./routes/reservation');

const corsOption = {
  origin: '*',
  optionsSuccessStatus: 200
};


app.use(cors(corsOption));

app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: true }));

app.use('/', menu);
app.use('/', breakfast);
app.use('/', lunch);
app.use('/', dinner);
app.use('/', reservation);

app.use("/", (req, res) => {
  res.send("Hello world");
});

const mongodb_url = process.env.mongodb_url;

mongoose
  .connect(mongodb_url)
  .then(() => {
    const port = process.env.PORT || 8080;
    app.listen( port, () => { console.log(`Servidor rodando na porta: ${port}`) });
  })

  .catch((err) => {
      console.log("Erro ao tentar conectar com o banco de dados " + err);
  });

module.exports = app; 
