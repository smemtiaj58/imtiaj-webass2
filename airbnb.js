
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
const Handlebars = require("handlebars");
const { body, validationResult } = require('express-validator');

var HTTP_PORT = process.env.PORT;

app.use(express.static(__dirname + "/views"));


app.get("/", function(req,res){
    res.send(__dirname + "/views/index.html");
   
});

app.get("/room", function(req,res){
    res.send(__dirname + "/views/roompage.html");
    
});



  app.listen(HTTP_PORT);



