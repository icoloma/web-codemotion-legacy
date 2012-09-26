

var 
    statics = require('./statics')
  ;
 
module.exports = function (server) {
 server.get('/', statics.home);
 server.get('/info', statics.home);
 server.get('/venue', statics.home);
 server.get('/schedule', statics.home);
 server.get('/cv', statics.home);
 server.get('/contribute', statics.home);
 server.get('/sponsors', statics.home);
 server.get('/partners', statics.home);
 server.get('/follow-up', statics.home);
 
}