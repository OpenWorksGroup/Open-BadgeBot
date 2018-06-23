
//Think I'm going to create a file of gists related to their hashtags & ids only to be used for static purposes. 
//Will add to it when badgebot runs
// For now - adding the gist id to the badge manifest

const request = require("request");
const createBadge = require("../createbadge.js");

exports.read = function(req,res){
  var badgename = req.params.badgeName;
  console.log("badgename "+badgename);
  
  //get badge manifest file based on badgename
  var badge = require('../badges/'+badgename+'.js');
  console.log("BADGE ");
  //console.log(badge);

  createBadge("sociallearningbadge", []).then((png) => {
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

  

  //https://gist.githubusercontent.com/kayaelle/4e8159ecf27faf3539607bc4ab97b9a1/raw
 /* request({
    url: 'https://gist.github.com/kayaelle/'+badge.gist_id+'/raw',
      json: true
    }, function (error, response, body) {
    console.log("BODY ");
    console.log(body);
    
  });*/
};