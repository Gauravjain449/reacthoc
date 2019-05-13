var express = require('express');
var app = new express();

app.get('/', function (req, res) {
    res.send("Hello Guarav Jain !");
});

app.route('/node').get(function (req, res) {
    res.send('Node Request Called!');
});

var server = app.listen(3000, function () {
    console.log('Server Start!');
});
