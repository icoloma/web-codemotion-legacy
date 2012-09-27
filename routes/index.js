module.exports = function (server) {
 server.get('/', renderPage('home'));
 server.get('/info', renderPage('info'));
 server.get('/venue', renderPage('venue'));
 server.get('/schedule',  renderPage('schedule'));
 server.get('/cv',  renderPage('cv'));
 server.get('/contribute',  renderPage('contribute'));
 server.get('/sponsors',  renderPage('sponsors'));
 server.get('/sponsors/:id', showSponsor);
 server.get('/partners',  renderPage('partners'));
 server.get('/follow-up',  renderPage('followUp'));
}

function renderPage(page) {
  return function( req, res){
    res.render('public/' + page, {
     title: 'Codemotion'
    });
  }
};

var showSponsor= function (req,res){
 res.render('public/sponsor', {
   title: 'Codemotion',
   sponsor: getSponsor(req,res)
  });

}

var getSponsor = function(req, res){
  var id = req.params.id;
  var types = _.keys(res.locals.sponsorList); 
  var sponsors = _.map( types, function(type){
    return _.find( res.locals.sponsorList[type], function(sp){ 
      sp.type = type;
      return (sp.id === id)
    });
  });
  return _.compact(sponsors)[0];
}
 