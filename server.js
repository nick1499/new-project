var http = require('http');
var hostname = '167.99.183.158';
var port = 80;



var express = require('express');
var app = express();
var path = require('path');


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

con.connect(function(err) {
  if (err) throw err;
  console.log("Database connected");
});
var allAliens = "";
var allPlanets = "";
    con.query("SELECT * FROM aliens", function (err, result) {
      if (err) throw err;
      
      Object.keys(result).forEach(function(key) {
        var row = result[key];
        allAliens = allAliens + row.Name + " ";
        allPlanets = allPlanets + row.Planet + " ";
      });
      //res.end("The three types of Covenant are " + allAliens + "\n" + "The planets they come from are " + allPlanets);
      console.log(allAliens);
    });


  //app.use(express.static(path.join('/root/server-side/new-project/routes')));

  app.set('view engine','jade');

  app.get('/', function(req, res) {
    
    res.render('index', {
    title:'The Halo world', message1:  'The three types of Covenant are ' + allAliens,  message2: 'The planets they come from are ' + allPlanets })

    
    });

  app.route('/about').get(function(req,res) {
      res.send("This is a database that stores information on all aliens in the galaxy");
  });
    
 
    
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  
  
/*
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/