const url = require('url'); 

exports.read = function(req,res){

    return res.redirect(url.format({
        pathname:"/badge/you-rock-badge"
    }));
};


  /*return res.render('index', {
    title: 'Open BadgeBot', 
    description: "BadgeBot issues #openbadges via Twitter interactions."
  });
};*/