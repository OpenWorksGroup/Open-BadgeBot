var assertion = require('../app/controllers/assertion');
var badge = require('../app/controllers/badge');
var landing = require('../app/controllers/landing');

module.exports = function (app) {
 
  //Landing - for now landing on you rock badge
  app.get('/', landing.read); 

  //Badge Description Display
  app.get('/badge/:badgeName', badge.read);

  //Badge Assertion Display
  app.get('/earned/:assertionId', assertion.read);

};