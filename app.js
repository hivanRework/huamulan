var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'views')));

app.set('views', __dirname + '/views');

app.get('/', function(req,res){
  res.send('Example Express');
})

app.listen(3000);