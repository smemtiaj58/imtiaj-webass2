
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
const Handlebars = require("handlebars");
const { body, validationResult } = require('express-validator');

var HTTP_PORT = process.env.PORT;

app.get('/', (req, res) => res.render('index.html'));
app.get('/room', (req, res) => res.render('roompage.html'));


  app.listen(HTTP_PORT);



