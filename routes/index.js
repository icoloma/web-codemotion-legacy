var talks = require('../db/talks.js');
var eventList = require('../db/events.js');

module.exports = function (server) {
 server.get('/', renderPage('home'));
 server.get('/info', renderPage('info'));
 server.get('/venue', renderPage('venue'));
 server.get('/schedule',  renderSchedule);
 server.get('/cv',  renderPage('cv'));
 server.get('/contribute',  renderPage('contribute'));
 server.get('/sponsors',  renderPage('sponsors'));
 server.get('/sponsors/:id', showSponsor);
 server.get('/partners',  renderPage('partners'));
 server.get('/follow-up',  renderPage('followUp'));
 server.get('/talks', renderTalks);
 server.get('/events', renderEvents);
}

function renderPage(page) {
  return function( req, res){
    res.render('public/' + page, {
     title: 'Codemotion'
    });
  }
};

function renderEvents(req,res){
res.render('public/events', {
    title: 'Codemotion',
    eventList: eventList
  });
}

function renderSchedule(req, res){
  res.render('public/schedule', {
    title: 'Codemotion',
    header: talks.schedule[0],
    schedule: _.rest(talks.schedule),
    workshops: _.rest(talks.workshops),
    tracks: talks.tracks
  });
}

function renderTalks(req, res){
  res.render('public/talks', {
    title: 'Codemotion',
    talks: _.values(talks.talks)
  });
}


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
 