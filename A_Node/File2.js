var express = require('express');
var app = new express();

app.get('/', function (req, res) {
    res.send("Hello Guarav Jain !");
});

var server = app.listen(3000, function () {
    console.log('Server Start!');
});
