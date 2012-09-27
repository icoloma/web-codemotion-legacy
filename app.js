
/**
 * Module dependencies.
 */

lingua = require("lingua");
_ = require('underscore');  

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , sponsors = require('./db/sponsors.js')
  , communities = require('./db/communities.js')
  , contributors = require('./db/contributors.js');
 
 ;


  
var app = express();

  app.configure(function(){
  app.set('port', process.env.PORT || 5000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');

  app.use(lingua(app, {
    defaultLocale: 'en',
    path: __dirname + '/i18n'
  }));

  app.use(express.favicon(__dirname + '/public/img/favicon.ico'));
  app.use(express.logger('dev'));
  app.use(express.cookieParser()); 
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(sponsors);
  app.use(communities);
  app.use(contributors);
  app.use(app.router);
});


app.configure('development', function(){
  app.use(express.errorHandler());
});

routes(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
