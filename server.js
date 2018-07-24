var express = require('express');
var parser=require('body-parser');

var app = new express();

app.use(parser.json());// middleware to parse a request
app.use(parser.urlencoded({
    extended: false
}));

app.get('/', function(req, res){
    res.status(200).send('Hello world');
});

app.get('/somedata', function(req, res){
    var data = {field1: 'Hello', field2:'world'};
    res.status(200).json(data);
});

app.post('/abc', function(req, res){
    var data=req.body;
    console.log(data);
});

//server app directory as static
app.use('/home', express.static('app'));

app.listen(9001);