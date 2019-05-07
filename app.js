const express = require('express')
require('dotenv').config();

var bodyParser = require('body-parser');

const sequelize = require('./src/models')

const app = express()

const port = process.env.PORT

var home = require('./src/routes/home')

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.use('/', home)

sequelize.sync().then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${process.env.PORT}!`)
    });
  });