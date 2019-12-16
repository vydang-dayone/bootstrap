const express = require('express');

const app = express();
const http = require('http').createServer(app);

const introPage = '/pages/intro.html';
const setupPage = '/pages/setup.html';


app.use('/static', express.static('public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + introPage);
});

app.get('/setup', function(req, res){
  res.sendFile(__dirname + setupPage);
});



http.listen(3000, () => {
  console.log('Server is running at http://localhost:3000')
})