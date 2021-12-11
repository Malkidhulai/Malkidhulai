const express = require('express')
var app = express();
var mysql = require('mysql');
const path = require('path')
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');

var app = express();
const viewspath = path.join(__dirname, '/public')

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(express.static(viewspath))
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', engine({ extname: 'hbs', defaultLayout: '', layoutsDir: __dirname + '/views//' }));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render("public/index")
  });

const Controller = require('./controller');

app.listen(8080, () => {
    console.log("Started at port 3000");
});

app.use('', Controller);