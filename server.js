const app = require('express')();
const http = require('http').createServer(app);

const homePage = '/pages/home.html';


app.get('/', function(req, res){
  res.sendFile(__dirname + homePage);
});

http.listen(3000, () => {
  console.log('Server is running at http://localhost:3000')
})