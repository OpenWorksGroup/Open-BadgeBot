const Twit = require('twit'); 
var Gists = require('gists');
const findHashtags = require('find-hashtags');
const { convertFile } = require('convert-svg-to-png');
const _ = require('underscore');
const async = require("async");
const fs = require('fs');
const path = require('path');

const twitConfig = require('../config/twit');
const T = new Twit(twitConfig); 
const ghConfig = require('../config/github');
const gists = new Gists(ghConfig);

const isImageUrl = require('is-image-url');
const isUrl = require('is-url');

const badgesFolder = '../app/badges';
var badges = [];
var bbGists = [];

// Can use this to check to see if gist exist based on supplied filename
function checkGists(fileName, callback) {
  _.each(bbGists,function(bbGist) { 
    bbGistsFile = Object.keys(bbGist.files);
    //console.log('bbGistsFile '+bbGistsFile);
    //console.log('re '+badgeHashtag+'-'+screename+'-'+criteria+'.json');
    //console.log("fileName: "+fileName);
    if (bbGistsFile == fileName){
     // console.log("MATCH");
      callback(true);
    }
  });
};

// logicFunctions for tweets
function twitter_functions(tweet, logicFunction, callback) {
  var resultArr = [];
  var resultBool = false;
  if (logicFunction == "twitter_photos") {
    //console.log(JSON.stringify(tweet));
    _.each(tweet.entities.media,function(media) { 
      console.log("TWEET MEDIA URL: "+JSON.stringify(media.media_url));
      if (isImageUrl(media.media_url)) {
        resultBool = true;
      }
      resultArr.push({url:media.media_url,result:resultBool});
      callback(resultArr)
    }); 
  }
  else if (logicFunction == "tweet_url") {

   // console.log("TWEET URLs: "+tweet.entities.urls);
    if (typeof tweet.entities.urls !== 'undefined') {
      //console.log("hey wha?"); // this isn't working - come back & test for not passing
      _.each(tweet.entities.urls,function(tweet) { 
        console.log("TWEET URL: "+tweet.url);
        if (isUrl(tweet.url)) {
          resultBool = true;
        }
        resultArr.push({url:tweet.url,result:resultBool});
        callback(resultArr);
      }); 
    }
    else {
      console.log("NO URLS");
      resultArr.push({error:"Missing URL"});
      callback(resultArr);
    }
  }

  else if (logicFunction == "tweet_gif") {
    //console.log(JSON.stringify(tweet));
   // console.log("TWEET VIDEO INFO: "+JSON.stringify(tweet.extended_entities.media));
    _.each(tweet.extended_entities.media,function(media) { 
     // console.log("TWEET MEDIA URL: "+JSON.stringify(media.video_info.variants[0].url)); //twitter may do more than one variant at some point and this maybreak
        resultBool = true; //setting to true because twitter insrets this - revisit
        resultArr.push({url:media.video_info.variants[0].url,result:resultBool});
      callback(resultArr);
    });
  }
  else if (logicFunction == "tweet_text") {
    //console.log(JSON.stringify(tweet));
    console.log("TWEET TEXT: "+JSON.stringify(tweet.mention));
    /*_.each(tweet.extended_entities.media,function(media) { 
     // console.log("TWEET MEDIA URL: "+JSON.stringify(media.video_info.variants[0].url)); //twitter may do more than one variant at some point and this maybreak
        resultBool = true; //setting to true because twitter insrets this - revisit
        resultArr.push({url:media.video_info.variants[0].url,result:resultBool});
      callback(resultArr);
    });*/
  }

}


async.waterfall([
  getGists,
  getBadges,
  processTweets
  ], function (err, result) {
      console.log("END");
  });


function getGists(callback) {
  gists.all(function(err,res){
    if (res) {
      bbGists = res;
      callback(null); 
    }
  });
}

function getBadges(callback) {
  var files = fs.readdirSync(path.join(__dirname,badgesFolder));
  //console.log("FILES "+files);
  async.each(files, function(file, callback) {
    var badge = require('../app/badges/'+file);
    badges.push(badge);
    callback(null,badges);
  }, function (err, result) {
   // console.log('badges '+ JSON.stringify(badges));
  });
  callback(null,badges); 
}

function processTweets(badges, callback) { 
  T.get('/statuses/mentions_timeline', { count: 800 }, function(err, tweets, response) {
    if (tweets) {
      async.each(tweets, function(tweet, callback) {
        async.waterfall([
          //step 1: get badge
          function(callback) {
            hashtagsFound = findHashtags(tweet.text);
            console.log("hashtagsFound "+hashtagsFound);
  
            async.each(hashtagsFound, function(hashtag, callback) {
              //console.log("hashtag "+hashtag);
              var badge = _.find(badges, function (obj) { return obj.hashtag_id === hashtag; });
              if (badge) {
                delete hashtagsFound[hashtag];
                callback(badge);
              }
            }, function (badge) {
            //  console.log("Found Badge "+ JSON.stringify(badge));
              callback(null, tweet, badge);
          });
        },
        // step 2: get criteria
        function(tweet,badge, callback) {
          async.each(hashtagsFound, function(hashtag, callback) {
           // console.log("hashtag criteria"+hashtag);
            var criteria = _.find(badge.criteria, function (obj) { return obj.hashtag_id === hashtag; });
            if (criteria) {
              callback(criteria);
            }
          }, function (criteria) {
          //  console.log("Found Criteria "+ JSON.stringify(criteria));
            callback(null, criteria, tweet, badge);
          });
        },
        // step 3: check logic & if it's been done already
        function(criteria,tweet,badge,callback) {

          var badgeHashtag = badge.hashtag_id;
          var screename = tweet.user.screen_name;
          var criteriaHashTag = criteria.hashtag_id;
          var logicFunction = criteria.logic_function;

          //console.log("criteria "+ JSON.stringify(criteria));
          console.log("logicFunction "+ logicFunction);
          console.log("TWEET TEXT: "+tweet.text);

          twitter_functions(tweet,logicFunction,function(result){
            console.log("FUNCTION RESULT: "+JSON.stringify(result));
            
            checkGists(badgeHashtag+'-'+screename+'-'+criteriaHashTag+'.json', function(match){
              if (match == true) {
                // user already completed
                console.log(true);
              }
            });
          });


          
            
        }
      ], function (err, result) {
          //console.log("SEND REPLY");
          callback(null);
        }); 
      });
    }
  });

  //callback(null);
}
