
var port = process.env.PORT || 3000;

var app = require('express')();
var http = require('http').Server(app);
var path = require('path');

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');


app.get('/', function(req, res){
  var arr = [
    "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg",
    "http://www.jeremynoeljohnson.com/wp-content/uploads/2014/06/crazy_cat_2.jpg",
    "http://giveitlove.com/wp-content/uploads/Cat-Dressed-as-a-Bunny-For-Halloween.jpg"
  ];

  res.render('index', {
    title: "Index",
    stringArr: arr
  });
});

app.get('/about', function(req, res){
  res.render('about',{title:"About"})
});

http.listen(port, function(){
  console.log('listening on ' + port);
});
