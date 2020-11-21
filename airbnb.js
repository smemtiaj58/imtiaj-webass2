
var express = require("express");
var app = express();
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bodyParser = require('body-parser');
const Handlebars = require("handlebars");
const { body, validationResult } = require('express-validator');

var HTTP_PORT = process.env.PORT || 3000;


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://smemtiaj:<Emtiaj2020?>@cluster0.h6j1k.mongodb.net/<web-222/user>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("web-222").collection("user");
  client.close();
});


app.use(express.static(__dirname + "/Views"));


app.get("/", function(req,res){
    res.sendFile(__dirname + "/Views/index.html");
   
});

app.get("/room", function(req,res){
    res.sendfile(__dirname + "/Views/roompage.html");
    
});



app.post('/action_page', [
  
  body('username').isEmail(),
  body('password').isLength({ min: 5 })
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  User.find({ email: "string",password: "string"})
  .exec()
  .then((User) => {

  User = User.map(value => value.toObject());

});


  
});

app.post('/form-reg', [
  
    body('username').isEmail(),
    body('password').isLength({ min: 5 })
  ], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    var newUser = new Schema({
      "email":  String,
      "fname": String,
      "lname": String,
      "password" : String
      
    });

    var User = mongoose.model("imtiaj-web-222", newUser);

    User.save((err) => {
      if(err) {
        console.log("There was an error saving the user");
      } else {
        console.log("Thanks for using AirBNB");
      }
      process.exit();
    });

  });

  app.listen(HTTP_PORT,onHttpStart);
  
  function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
}





/*
----2nd assignment-------

var express = require("express");
var app = express();
var bodyParser = require('body-parser');
const Handlebars = require("handlebars");
const { body, validationResult } = require('express-validator');

var HTTP_PORT = process.env.PORT || 3000;


app.use(express.static(__dirname + "/Views"));


app.get("/", function(req,res){
    res.sendFile(__dirname + "/Views/index.html");
   
});

app.get("/room", function(req,res){
    res.sendfile(__dirname + "/Views/roompage.html");
    
});



app.post('/action_page', [
  
  body('username').isEmail(),
  body('password').isLength({ min: 5 })
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  User.create({
    username: req.body.username,
    password: req.body.password
  }).then(user => res.json(user));
});

app.post('/form-reg', [
  
    body('username').isEmail(),
    body('password').isLength({ min: 5 })
  ], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  });


  app.listen(HTTP_PORT,onHttpStart);
  
  

  
  function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
}
  */
