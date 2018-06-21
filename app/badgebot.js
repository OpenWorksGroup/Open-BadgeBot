var Twit = require('twit');  
var findHashtags = require('find-hashtags');
const { convertFile } = require('convert-svg-to-png');
var _ = require('underscore');
const fs = require('fs');
const path = require('path');

//http://theusualstuff.com/create-twitter-bot-node-js-twit-package/
//https://codeburst.io/build-a-simple-twitter-bot-with-node-js-in-just-38-lines-of-code-ed92db9eb078
//https://developer.twitter.com/en/docs/api-reference-index
//https://developer.twitter.com/en/docs/basics/rate-limiting.html
//https://developer.twitter.com/en/docs/developer-utilities/twitter-text --someday?
//https://apps.twitter.com/app/15182189/show

//use the Twit package
 
//call the API keys we saved in the config.js file
var twitConfig = require('../config/twit');  
var badgesFolder = '../app/badges';

fs.readdir(path.join(__dirname,badgesFolder), (err, files) => {
  files.forEach(file => {
    
    //console.log("HEY "+file);
    var badge = require('../app/badges/'+file); 

    //DEBUG TO VIEW BADGE DATA
    console.log('BADGE:');

Object.keys(badge).forEach(function(key) {
    if (key === "criteria") {
        var criteria = badge[key];
        i = 1;
        criteria.forEach(function(prop) {
           // console.log('=====================');
           // console.log('Criteria '+ i++ + ':');
            Object.keys(prop).forEach(function(key) {
               // console.log(key + ' '+ prop[key]);
            });
        });
    }
    if (key === "faqs") {
        var faqs = badge[key];
        i = 1;
        faqs.forEach(function(prop) {
           // console.log('=====================');
           // console.log('FAQ '+ i++ + ':');
            Object.keys(prop).forEach(function(key) {
               // console.log(key + ' '+ prop[key]);
            });
        });
    }
    else {
       // console.log(key + ' '+ badge[key]);
    }
});
//console.log('Badge Name: '+ badge.badge_name);
//console.log('hashtag_id: '+ badge.hashtag_id);

  });
})

 
//configure the twit package with our API keys
var T = new Twit(twitConfig); 
var badgehashtags = ["#testbadge", "#testbadge2"];

T.get('/statuses/mentions_timeline', { count: 800 }, function(err, data, response) {
    //console.log(data);
    if (data) {
        _.each(data,function(mention) {
            console.log(mention.user.screen_name);
            console.log(mention.text);
            var hashtagsFound = findHashtags('This #badgename contains a number of #useful hashtags');
            console.log('tweet url: https://twitter.com/'+mention.user.screen_name+'/status/'+mention.id_str);
            var hashtagsFound = findHashtags(mention.text);
            console.log(hashtagsFound);

            _.each(hashtagsFound,function(hashtag) {            
              console.log(_.contains(["testbadge", "testbadge2"], 'testbadge'));
              //console.log(hashtag);
            });

            
           // reply = '@' + mention.user.screen_name + ' thanks for reaching out!'
           // T.post('statuses/update', { status: reply, in_reply_to_status_id: mention.id_str }, function(err, data, response) {              
            //    console.log(data)
           // });
        });
    }
});

// I am making this into its own function so we can apply this to any new
// badges that come from newly added badge images.
localConvertFile("test.svg", "anothername.png")

// this will convert any files from svg -> png
async function localConvertFile(inputFilePath, outputFilePath) {
  let options = {};
  if (outputFilePath) {
    options = { ...options, outputFilePath };
  }

  // PLUGIN from: https://www.npmjs.com/package/convert-svg-to-png
  return await convertFile(inputFilePath, options).then((outputPath) => {
    const successString = "You can find the recently created png at " + outputPath;
    console.log(successString);
    return successString;
  }, (error) => {
    const errorString = "ERROR:" + error;
    console.log(errorString)
    return errorString;
  });
}

/*
Post a tweet with media

pngFileName: this must be the png file
status: This is going to be the text associated with the png
altText: this will be applied as the alt tag on the image
*/
function postBadgeWithMedia(pngFileName, status, altText = "") {
  var b64content = fs.readFileSync(fileName, { encoding: 'base64' })

  // // first we must post the media to Twitter
  T.post('media/upload', { media_data: b64content }, function (err, data, response) {
    // now we can assign alt text to the media, for use by screen readers and
    // other text-based presentations and interpreters
    var mediaIdStr = data.media_id_string
    var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }

    T.post('media/metadata/create', meta_params, function (err, data, response) {
      if (!err) {
        // now we can reference the media and post a tweet (media will attach to the tweet)
        var params = { status: status, media_ids: [mediaIdStr] }

        T.post('statuses/update', params, function (err, data, response) {
          console.log(data)
        })
      }
    })
  })
}