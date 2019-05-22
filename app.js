const express = require('express')
var exphbs = require('express-handlebars')
require('dotenv').config();

var bodyParser = require('body-parser');

const app = express()

const port = process.env.PORT


var home = require('./src/routes/home')

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.set('views','./src/views');

app.engine('hbs', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'hbs');



app.use('/', home)


app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
});
