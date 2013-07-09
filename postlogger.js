var express = require('express');
var app = express();

app.use(express.bodyParser());

console.log('POST to me and I will log it for you.');

app.post('/', function(req, res) {
    console.dir(req.body);
    res.send('nom nom nom\n');
});

app.get('/', function(req, res) {
    res.send('Try POSTing.\n');
});

app.listen('3000');