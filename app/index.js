var app = require('express')();
var express = require('express');
var path = require('path');
var http = require('http').Server(app);
var bCrypt = require('bcryptjs');
var bodyParser = require('body-parser');
var router = require('./router/router.js');
var Authrouter = require('./router/Authrouter.js');
var admin_router = require('./router/admin_router.js');
const session = require('express-session');
const fileUpload = require('express-fileupload');


const db = require('./config/db.config');
const { user } = require('./config/db.config');

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(fileUpload()); // configure fileupload

db.sequelize.sync({force: false}).then(() => {
	console.log('create table sync { force: false }');
  });
  
app.use('/', router); 
// Access public folder from root
app.use('/public', express.static('public'));
app.get('/layouts/', function(req, res) {
  res.render('view');
});


// Add Authentication Route file with app
app.use('/', Authrouter); 

//For set layouts of html view
var expressLayouts = require('express-ejs-layouts');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

// Add Route file with app

app.use('/', admin_router); 



http.listen(8000, function(){
  console.log('listening on *:8000');
});

