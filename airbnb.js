var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + "/views"));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
var HTTP_PORT = process.env.PORT;
 app.listen(HTTP_PORT);
