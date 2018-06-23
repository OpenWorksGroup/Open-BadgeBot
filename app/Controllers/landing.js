exports.read = function(req,res,next){
  return res.render('index', {
    title: 'Open BadgeBot', 
    descripton: "BadgeBot issues #openbadges via Twitter interactions."
  });
};