var http = require('http');
var hostname = '167.99.183.158';
var port = 80;



var express = require('express');
var app = express();
var path = require('path');


/*
var mysql      = require('mysql');
var con = mysql.createConnection({
  socketPath : '/var/run/mysqld/mysqld.sock',
  host     : '167.99.183.158',
  port     : '80',
  user     : 'root',
  password : '',
  database : 'alienDB',
  insecureAuth : true
});
*/




app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
   console.log('html get is working');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



app.use(express.static(path.join('myapp', 'public')));

/*
con.connect(function(err) {
  if (err) throw err;
});

  var server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    con.query("SELECT * FROM aliens", function (err, result) {
      if (err) throw err;
      var allAliens = "";
      var allPlanets = "";
      Object.keys(result).forEach(function(key) {
        var row = result[key];
        allAliens = allAliens + row.Name + " ";
        allPlanets = allPlanets + row.Planet + " ";
      });
      res.end("The three types of Covenant are " + allAliens + "\n" + "The planets they come from are " + allPlanets);
      console.log(allAliens);
    });
  });



server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/