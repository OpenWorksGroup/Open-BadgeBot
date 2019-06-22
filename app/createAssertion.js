const moment  = require('moment');

var getNowDateTime = function(){
  var now = Date.now();
  dateString = moment(now).format('YYYY-MM-DD HH:mm:ss');
  return dateString;
}

module.exports = function(badgeName, completeCriteria) {

var assertion = {
    
  "@context": "https://w3id.org/openbadges/v2",
  "type": "Assertion",
  "id": "https://gist.github.com/badgebotio/b700bf0fbefd6b61639d1fdd3a5dd71a/raw/",
  "recipient": {
    "type": "url",
    "hashed": false,
    "identity": "https://twitter.com/kayaelle"
  },
  "evidence": "https://twitter.com/sadhappyboto/status/1141772111461175297",
  "issuedOn": "2016-12-31T23:59:59Z",
  "badge": "https://gist.githubusercontent.com/badgebotio/dfcedd03d5b4897740a39460b9611313/raw/",
  "verification": {
    "type": "hosted"
  }

}


  return assertion;
}

/**
ASSERTION:

{
  "@context": "https://w3id.org/openbadges/v2",
  "type": "Assertion",
  "id": "https://gist.github.com/badgebotio/b700bf0fbefd6b61639d1fdd3a5dd71a/raw/",
  "recipient": {
    "type": "url",
    "hashed": false,
    "identity": "https://twitter.com/kayaelle"
  },
  "evidence": "https://twitter.com/sadhappyboto/status/1141772111461175297",
  "issuedOn": "2016-12-31T23:59:59Z",
  "badge": "https://gist.githubusercontent.com/badgebotio/dfcedd03d5b4897740a39460b9611313/raw/",
  "verification": {
    "type": "hosted"
  }
}

BADGE CLASS: https://gist.githubusercontent.com/badgebotio/dfcedd03d5b4897740a39460b9611313/raw/
{
 "@context": "https://w3id.org/openbadges/v2",
 "type": "BadgeClass",
 "id": "https://gist.githubusercontent.com/badgebotio/dfcedd03d5b4897740a39460b9611313/raw/",
 "name": "Your Rock! Badge",
 "description": "Inaugural BadgeBot badge! Recipient of this badge is being recognized for making an impact.",
 "image": "http://pngimg.com/uploads/dog/dog_PNG50346.png",
 "criteria": {
  "narrative": "Send a tweet to @badgebotio including #yourockbadge and @username(s) with a message explaining how this person or people made an impact on you.\n\nOptional: include a photo or video.\n\nExample of tweet: **@badgebotio** Please issue a **#yourockbadge** to **@USWomensoccerT1** for their fight for pay equality."
 },
 "issuer": {
   "id": "https://twitter.com/BadgeBotio", //change this to badgebot.io
   "type": "Profile",
   "name": "BadgeBot"
 } 
}

**/