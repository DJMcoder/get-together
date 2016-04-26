var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var moment = require('moment');
var router = express.Router();
var port = process.env.PORT || 80;

app.set('view engine', 'ejs');
app.use(express.static('static'));
app.use(bodyParser.urlencoded({ extended: false }));

router.get('/', function(req, res) {
  res.render('pages/home.html');
});
app.use('/', router);

app.listen(port);
console.log("Magic happens on port " + port);
