const express = require('express');
const aws = require('aws-sdk');

const app = express();
app.set('views', './views');
app.use(express.static('./public'));
app.engine('html', require('ejs').renderFile);
app.listen(process.env.PORT || 3000);

const S3_BUCKET = process.env.S3_BUCKET;

var HTTP_PORT = process.env.PORT;

app.get('/', (req, res) => res.render('index.html'));
app.get('/room', (req, res) => res.render('roompage.html'));


  app.listen(HTTP_PORT);



