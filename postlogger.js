var express = require('express');
var app = express();

console.log('POST to me and I will log it for you.');

app.post('/', function(req, res) {
    console.log(req.body);
});

app.get(function() {
    console.log('POST to me and I will log it for you.');
});