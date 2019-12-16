const express = require('express');

const app = express();
const http = require('http').createServer(app);

const introPage = '/pages/intro.html';
const setupPage = '/pages/setup.html';
const layoutPage = '/pages/layout.html';
const contentPage = '/pages/content.html';
const componentsPage = '/pages/components.html';
const utilitiesPage = '/pages/utilities.html';
const extendPage = '/pages/extend.html';


app.use('/static', express.static('public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + introPage);
});

app.get('/setup', function(req, res){
  res.sendFile(__dirname + setupPage);
});

app.get('/layout', function(req, res){
  res.sendFile(__dirname + layoutPage);
});

app.get('/content', function(req, res){
  res.sendFile(__dirname + contentPage);
});

app.get('/components', function(req, res){
  res.sendFile(__dirname + componentsPage);
});

app.get('/utilities', function(req, res){
  res.sendFile(__dirname + utilitiesPage);
});

app.get('/extend', function(req, res){
  res.sendFile(__dirname + extendPage);
});


http.listen(3000, () => {
  console.log('Server is running at http://localhost:3000')
})