var express = require('express');
var app = new express();

app.get('/', function (req, res) {
    res.send("Hello Gaurav Jain !");
});

app.get('/react', function (req, res) {
    res.send("React !");
});


app.route('/node').get(function (req, res) {
    res.send('Node up!');
})



var server = app.listen(3000, function () {
    console.log('Server Start!');
});
