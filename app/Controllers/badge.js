
//Think I'm going to create a file of gists related to their hashtags & ids only to be used for static purposes. 
//Will add to it when badgebot runs
// For now - adding the gist id to the badge manifest

const createBadge = require("../createbadge.js");

exports.read = function(req,res){
  var badgename = req.params.badgeName;
  console.log("badgename "+req.params.badgeName);
  
  //get badge manifest file based on badgename
  var badge = require('../badges/'+badgename+'.js');
  console.log("BADGE ");
  //console.log(badge);

  createBadge(badgename, []).then((png) => {
    const base64data = Buffer.from(png).toString('base64');
    //console.log("here is base64png", base64data);

    badge.image = base64data;
    //console.log("here is png", badge.image);

    return res.render('badge', {
      title: badge.badge_name, 
      description: badge.description,
      badge: badge
    });
  });
};