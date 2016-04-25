var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var moment = require('moment');
var router = express.Router();
var port = process.env.PORT || 80;
shortid.seed(6899);

router.get('/', function(req, res) {
  res.render('pages/home');
});

app.listen(port);
console.log("Magic happens on port " + port);
