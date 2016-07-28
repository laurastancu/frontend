/*global __dirname, process*/
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var http = require('http');
var cors = require('cors');

var app = express();

app.use(express.static('public'));
app.use(cors({origin: 'http://172.16.226.18/'}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.header('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.header('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});


var port = process.env.PORT || 5000;
var server = http.createServer(app);
server.listen(port, () => {
  console.log('Express server listening on %d, in %s mode', port, app.get('env'));
});

module.exports = server;
