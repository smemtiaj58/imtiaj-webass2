
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
const Handlebars = require("handlebars");
const { body, validationResult } = require('express-validator');

var HTTP_PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/views"));

const urlencodedParser = bodyParser.urlencoded({ extended : false});

app.get("/", function(req,res){
    res.sendFile(__dirname + "/views/index.html");
   
});

app.get("/room", function(req,res){
    res.sendfile(__dirname + "/views/roompage.html");
    
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




  


  app.listen(HTTP_PORT);



