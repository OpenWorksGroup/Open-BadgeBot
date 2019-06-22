
                  // it exists then, update the gist - think we need more than match
                  // maybe we fetch it if we know it?
                  // will need the evidence array for the badge image
                  // also need badgeHashtag for the badge image
                  //console.log(true);
                 // gists.download({id: match}, function(err, res) {
                    // res is an object with details about the gist, including content, 
                    // included files, etc.
                   // console.log(JSON.stringify(res.files));
                 // });
                 /* request({
                    url: rawUrl,
                    json: true
                  }, function (error, response, body) {

                    if (!error && response.statusCode === 200) {
                      console.log("LOGIC: #"+logicFunction);
                      console.log("criteriaDescription: "+criteriaDescription);
                      console.log("tweetUrl: "+tweetUrl);
                      console.log("BODY: ");
                      console.log(body);
                      var addOn = {
                        "id": tweetUrl,
                        "name": logicFunction,
                        "descripton": criteriaDescription};
                      var newBody = body + ',' + addOn;
                      console.log("NEW BODY: ");
                      console.log(JSON.stringify(newBody));

                    }
                  });*/ 
 example gist:

 GIST {
  "url":"https://api.github.com/gists/4614803b39f580806454a0735214b221",
 "forks_url":"https://api.github.com/gists/4614803b39f580806454a0735214b221/forks",
 "commits_url":"https://api.github.com/gists/4614803b39f580806454a0735214b221/commits",
 "id":"4614803b39f580806454a0735214b221",
 "node_id":"MDQ6R2lzdDQ2MTQ4MDNiMzlmNTgwODA2NDU0YTA3MzUyMTRiMjIx",
 "git_pull_url":"https://gist.github.com/4614803b39f580806454a0735214b221.git",
 "git_push_url":"https://gist.github.com/4614803b39f580806454a0735214b221.git",
 "html_url":"https://gist.github.com/4614803b39f580806454a0735214b221",
 "files":{
  "testbadge-sadhappyboto-assertion-1.json":{
    "filename":"testbadge-sadhappyboto-assertion-1.json",
    "type":"application/json",
    "language":"JSON",
    "raw_url":"https://gist.githubusercontent.com/badgebotio/4614803b39f580806454a0735214b221/raw/210c3f0901f71914d69e98d2f2d431682ebbdb48/testbadge-sadhappyboto-assertion-1.json",
    "size":675}
  },
  "public":true,
  "created_at":"2018-06-16T23:47:38Z",
  "updated_at":"2018-06-17T02:36:25Z",
  "description":"testbadge-sadhappyboto-assertion-1.json",
  "comments":1,
  "user":null,
  "comments_url":"https://api.github.com/gists/4614803b39f580806454a0735214b221/comments",
  "owner":{
    "login":"badgebotio",
    "id":40325704,
    "node_id":"MDQ6VXNlcjQwMzI1NzA0",
    "avatar_url":"https://avatars0.githubusercontent.com/u/40325704?v=4",
    "gravatar_id":"",
    "url":"https://api.github.com/users/badgebotio",
    "html_url":"https://github.com/badgebotio",
    "followers_url":"https://api.github.com/users/badgebotio/followers",
    "following_url":"https://api.github.com/users/badgebotio/following{/other_user}",
    "gists_url":"https://api.github.com/users/badgebotio/gists{/gist_id}",
    "starred_url":"https://api.github.com/users/badgebotio/starred{/owner}{/repo}",
    "subscriptions_url":"https://api.github.com/users/badgebotio/subscriptions",
    "organizations_url":"https://api.github.com/users/badgebotio/orgs",
    "repos_url":"https://api.github.com/users/badgebotio/repos",
    "events_url":"https://api.github.com/users/badgebotio/events{/privacy}",
    "received_events_url":"https://api.github.com/users/badgebotio/received_events",
    "type":"User",
    "site_admin":false,
    "truncated":false
  }


  TWEET {"created_at":"Sat Jun 16 23:36:44 +0000 2018",
  "id":1008131288639959000,
  "id_str":"1008131288639959040",
  "text":"@badgebotio #testbadge #photo https://t.co/q6mwMFJe7O",
  "truncated":false,
  "entities":{
    "hashtags":[
      {"text":"testbadge","indices":[12,22]},
      {"text":"photo","indices":[23,29]}
    ],
    "symbols":[],
    "user_mentions":[
      {
        "screen_name":"BadgeBotio",
        "name":"BadgeBot",
        "id":991838614643503100,
        "id_str":"991838614643503104",
        "indices":[0,11]}],
        "urls":[],
        "media":[
        {
          "id":1008131281908092900,
          "id_str":"1008131281908092929",
          "indices":[30,53],
          "media_url":"http://pbs.twimg.com/media/Df2aD0EXUAEAlpR.jpg",
          "media_url_https":"https://pbs.twimg.com/media/Df2aD0EXUAEAlpR.jpg",
          "url":"https://t.co/q6mwMFJe7O","display_url":"pic.twitter.com/q6mwMFJe7O",
          "expanded_url":"https://twitter.com/sadhappyboto/status/1008131288639959040/photo/1",
          "type":"photo",
          "sizes":{
            "medium":{
              "w":480,
              "h":400,
              "resize":"fit"
            },
            "thumb":{
              "w":150,
              "h":150,
              "resize":"crop"
            },
            "large":{
              "w":480,
              "h":400,
              "resize":"fit"
            },
            "small":{
              "w":480,
              "h":400,
              "resize":"fit"
            }
          }
        }
        ]
      },
      "extended_entities":{
        "media":[
        {"id":1008131281908092900,
        "id_str":"1008131281908092929",
        "indices":[30,53],
        "media_url":"http://pbs.twimg.com/media/Df2aD0EXUAEAlpR.jpg",
        "media_url_https":"https://pbs.twimg.com/media/Df2aD0EXUAEAlpR.jpg",
        "url":"https://t.co/q6mwMFJe7O",
        "display_url":"pic.twitter.com/q6mwMFJe7O",
        "expanded_url":"https://twitter.com/sadhappyboto/status/1008131288639959040/photo/1",
        "type":"photo",
        "sizes":{
          "medium":{
            "w":480,
            "h":400,
            "resize":"fit"
          },
          "thumb":{
            "w":150,
            "h":150,
            "resize":"crop"
          },
          "large":{
            "w":480,
            "h":400,
            "resize":"fit"
          },
          "small":{
            "w":480,
            "h":400,
            "resize":"fit"
          }
        }
      }
      ]
    },
    "source":"<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
    "in_reply_to_status_id":null,
    "in_reply_to_status_id_str":null,
    "in_reply_to_user_id":991838614643503100,
    "in_reply_to_user_id_str":"991838614643503104",
    "in_reply_to_screen_name":"BadgeBotio",
    "user":{
      "id":949385485482364900,
      "id_str":"949385485482364930",
      "name":"Sad Happy Boto",
      "screen_name":"sadhappyboto",
      "location":"","description":"","url":null,"entities":{"description":{"urls":[]}},"protected":false,"followers_count":0,"friends_count":0,"listed_count":0,"created_at":"Fri Jan 05 21:01:53 +0000 2018","favourites_count":0,"utc_offset":null,"time_zone":null,"geo_enabled":false,"verified":false,"statuses_count":4,"lang":"en","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"F5F8FA","profile_background_image_url":null,"profile_background_image_url_https":null,"profile_background_tile":false,"profile_image_url":"http://pbs.twimg.com/profile_images/949389212939407361/-XugNezr_normal.jpg","profile_image_url_https":"https://pbs.twimg.com/profile_images/949389212939407361/-XugNezr_normal.jpg","profile_banner_url":"https://pbs.twimg.com/profile_banners/949385485482364930/1515187376","profile_link_color":"1DA1F2","profile_sidebar_border_color":"C0DEED","profile_sidebar_fill_color":"DDEEF6","profile_text_color":"333333","profile_use_background_image":true,"has_extended_profile":false,"default_profile":true,"default_profile_image":false,"following":false,"follow_request_sent":false,"notifications":false,"translator_type":"none"},"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"retweet_count":0,"favorite_count":0,"favorited":false,"retweeted":false,"possibly_sensitive":false,"lang":"und"}


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


function getTweets(files, callback) { 
  var tweets = [];
  T.get('/statuses/mentions_timeline', { count: 800 }, function(err, data, response) {
  //console.log(data);
  if (data) {
    _.each(data,function(mention) {
      tweets.push(mention)
      // console.log(mention.user.screen_name);
       //console.log(mention.text);
        //var hashtagsFound = findHashtags('This #badgename contains a number of #useful hashtags');
        // console.log('tweet url: https://twitter.com/'+mention.user.screen_name+'/status/'+mention.id_str);
       // var hashtagsFound = findHashtags(mention.text);
       // console.log(hashtagsFound);
       // console.log("FILES "+files);

       // _.each(hashtagsFound,function(hashtag) {            
       //   console.log(_.contains(files, 'testbadge'));
       //   console.log(hashtag);
       // });            
           // reply = '@' + mention.user.screen_name + ' thanks for reaching out!'
           // T.post('statuses/update', { status: reply, in_reply_to_status_id: mention.id_str }, function(err, data, response) {              
            //    console.log(data)
           // });
      });
    }
  });
  callback(null,files,tweets);
}



const Twit = require('twit'); 
var Gists = require('gists');
const moment  = require('moment');
const findHashtags = require('find-hashtags');
const userMentions = require('get-user-mentions');
const { convertFile } = require('convert-svg-to-png');
const _ = require('underscore');
const async = require("async");
const fs = require('fs');
const junk = require('junk');
const path = require('path');
const request = require("request");
const createSVGBadgePNG = require("./createbadge.js");

const bdb = require("berkeleydb");
const db = new bdb.Db(); // create a new Db object

const twitConfig = require('../config/twit');
const T = new Twit(twitConfig); 
const ghConfig = require('../config/github');
const gists = new Gists(ghConfig);

const isImageUrl = require('is-image-url');
const isUrl = require('is-url');

const badgesFolder = '../app/badges';
var badges = [];
var bbGists = [];
//var latestTweets = [];


// STARTS HERE. Get gists, badges & tweets

module.exports = function() {
async.waterfall([
  getGists,
  getBadges,
  getTweets,
  processTweets
  ], function (err, result) {
      console.log(result);
  });

function getGists(callback) {
  gists.all(function(err,res){
    if (res) {
      bbGists = res;
      //console.log("GISTS "+JSON.stringify(bbGists));
      callback(null, bbGists); 
    }
  });
}

function getBadges(bbGists, callback) {
  var files = fs.readdirSync(path.join(__dirname,badgesFolder));
  var notJunkFiles = files.filter(junk.not);
  //console.log(files.filter(junk.not));
  async.each(files.filter(junk.not), function(file, callback) {
    var badge = require('../app/badges/'+file);
    badges.push(badge);
    callback(null);
  }, function (err, result) {
   //console.log('badges '+ JSON.stringify(badges));
    callback(null,bbGists,badges);
  });
}


/** 
Retrieve  tweets since last tweet id was retrieved.
var lastTweetId is stored in Berkely DB.
Twitter has a max of 200 per request.
**/
function getTweets(bbGists, badges, callback) {
    db.open("badgebot.db");
    //var lastTweetId = db.get("lastTweetId").toString();
    var lastTweetId = "1141449493679869953";
    //console.log("lastTweetId "+lastTweetId);

    var options = {count: 200};
    if (lastTweetId) { options.since_id = lastTweetId; }

    //console.log("options "+ JSON.stringify(options));

    T.get('/statuses/mentions_timeline', options, function(err, tweets, response) {
        if (tweets.length > 0) {
            var i = 0;
            async.each(tweets, function(tweet, callback) {
                /**most recent is first result. Store this id so 
                we can retrieve only most recent using since_id**/
                if (i == 0) { 
                    db.put("lastTweetId", tweet.id_str);
                }
              //  console.log("TWEET ID: "+tweet.id_str);
              //  console.log("CREATED AT: "+tweet.created_at);
                i++;
                callback();
            },
            function (err) {
               // console.log("err "+err);
                db.close();
                //console.log("LATEST TWEETS "+JSON.stringify(tweets));
                callback(null, bbGists,badges,tweets);
            });
        }
        else {
            console.log("No Tweets");
            db.close();
            callback(null, bbGists, badges, tweets);
        }
    });
}

/** Processing each tweet
1. Get hashtags; If no hashtags...
2. Get Badge; If no badge...
3. If criteria met, save badge assertion and tweet

**/



function processTweets(bbGists, badges, tweets, callback) { 

   // console.log("GISTS "+JSON.stringify(bbGists));
   // console.log('badges '+ JSON.stringify(badges));
   // console.log("LATEST TWEETS "+JSON.stringify(tweets));

    if (tweets.length == 0){
        callback(null,"done"); // nothing to do until there are tweets
    }
    else {
        async.each(tweets, function(tweet, callback) {
            console.log("Tweet ID STR "+tweet.id_str);
            console.log("Tweet ID "+tweet.id);
            console.log("Tweet Text "+tweet.text);
            getBadgeFromTweet(tweet, badges, function(badge) {

                if (badge) {
                    console.log("badge "+JSON.stringify(badge));
                    async.series([
                        function(callback) {
                           // get earners & filter out @badgebotio
                            o_earners = userMentions(tweet.text);
                           // console.log("O EARNERS "+o_earners);
                            earners = _.reject(userMentions(tweet.text), function(earner){return (earner.toLowerCase() == "@badgebotio"); });
                           // earners = ['@someone', '@someonetoo'];
                            if (earners.length) {
                               // console.log("EARNERS "+earners);
                                callback(null, earners);
                            }
                            else {
                                callback("no earner");
                            }
                        },
                        function(callback) {
                            //would like to do a screenshot of tweet but will get back to it
                           /* screenshotTweet(
                                "https://twitter.com/reactjs/status/912712906407501825",
                                "tweet.jpg"
                            ).then(() => {
                                console.log("Success");
                                callback(null,"two")
                            }).catch(error => {
                                console.error("Error");
                                callback(null);
                            });*/
                            //- get tweet id for evidence tweet.id 
                            //- F take screen shot https://www.npmjs.com/package/screenshot-tweet
                            //- https://www.npmjs.com/package/img-to-svg
                            //- can embed svg from gist: <script src="https://gist.github.com/badgebotio/d63c82ce789bef941d834293d1fe1a74.js"></script>
                            
                            //https://twitter.com/sadhappyboto/status/1141449493679869953
                            tweetUrl = "https://twitter.com/"+tweet.user.screen_name+"/status/"+tweet.id_str;
                            //console.log("TWEET URL "+tweetUrl);

                            callback(null,tweetUrl);
                        }
                    ],
                    function(err, results) {

                        if (err){
                            console.log("ERR "+err);
                            // right now err is no earners
                        }

                        console.log("RESULTS "+results);

                        var earners = results[0];
                        var evidenceUrl = results[1];

                        /** save assertion and send tweet to each user **/

                        async.each(earners, function(earner, callback) {
                            /** 
                            The open badges spec uses linked data and requires that
                            the @id of the assertion is the iri of the assertion but
                            since wer using gists, we don't know what the url will be
                            for the gist so we'll need to create the gist and then update
                            it with the assertion.
                            **/

                            console.log("A You Rock Open Badge Assertion for "+ earner);

                            async.waterfall([
                                function(callback) {
                                    earner = earner.replace('@','');
                                    issuedDate = moment(Date.now()).format();
                                    filenameDate = moment(Date.now()).format('YYYY-MM-DD-HH-mm-ss');
                                    var filename = badge.hashtag_id+"-"+earner+"-"+filenameDate+"-assertion.json";

                                    //create
                                    gistOptions = {
                                        "description":"A You Rock! Open Badge Assertion for "+ earner, 
                                        "public":"true",
                                        "files": {
                                            [filename]: {
                                                "content": "Placeholder for assertion"
                                            }
                                        }    
                                    };

                                    gists.create(gistOptions, function(err,res){
                                        //console.log(JSON.stringify(res.files.filename));
                                        callback(null, res, filename);
                                    });
                                },
                                function(res, filename, callback) {

                                    assertionUrl = "https://gist.githubusercontent.com/badgebotio/"+res.id+"/raw";
                                    //console.log("ASSERTION URL "+JSON.stringify(assertionUrl));
                                    //console.log("FILENAME "+filename);

                                    assertion = JSON.stringify({
                                        "@context": "https://w3id.org/openbadges/v2",
                                            "type": "Assertion",
                                            "id": assertionUrl,
                                            "recipient": {
                                                "type": "url",
                                                "hashed": false,
                                                "identity": "https://twitter.com/"+earner,
                                            },
                                            "evidence": {
                                                "id": tweetUrl,
                                                "narrative": "Issued on Twitter by Badgebot from [@"+tweet.user.screen_name+"](https://twitter.com/"+tweet.user.screen_name+")"
                                            },
                                            "issuedOn": issuedDate,
                                            "badge": "https://gist.githubusercontent.com/badgebotio/dfcedd03d5b4897740a39460b9611313/raw",
                                            "verification": {
                                                "type": "hosted"
                                            }
                                    });

                                    gists.edit({
                                        "id": res.id,
                                        "files": {
                                            [filename]: {
                                            "content": assertion
                                            }
                                        }
                                    }, 
                                    function(err, res) {
                                        //console.log("REST "+JSON.stringify(res));
                                        callback(null,res);

                                },
                                function(res, callback) {
                                // will use res to get assertion for earned badge display - do this page first then tweet

                                    //send tweet
                                    /**- tweet response
                            - congratulations message
                            - picture of badge
                            - link to where to view it
                            **/

                               // createSVGBadgePNG(badgeHashtag, []).then((png) => {
                                //    const base64data = Buffer.from(png).toString('base64');

                                

                                   // console.log("SEND TWEET "+JSON.stringify(result));

                                    callback();
                                }
                            ],
                                function(err, result) {
                                    
                                callback(result);
                            });
                        },
                        function (err, result) {
                            callback(null, "done with earners");
                        }); 


                        /**

                            badgebot.io:
                                - nodejs site started with theme. Yay!
                                - Done: page for each earned badge with notes about 
                                - Add to earned badge page: how to delete, coming soon and what an open badge is
                                - Done: page for you rock badge
                                - Done:Landing page
                                - Done: About page
                                - Done: Remove main FAQS
                                - Done: add with support from Participate - link to Participate
                                - set up an aws instance to host
                                - run badebotjs on cron: 
                                - https://www.npmjs.com/package/cron
                                -https://stackoverflow.com/questions/53688945/are-child-processes-for-cron-jobs-in-node-js-recommended
                                -freessl: https://itnext.io/node-express-letsencrypt-generate-a-free-ssl-certificate-and-run-an-https-server-in-5-minutes-a730fbe528ca
                                https://www.npmjs.com/package/greenlock
                                - favicon

                        **/
                       // console.log("Tweet Text "+tweet.text);
                       // console.log("Tweet ID "+tweet.id);
                       // console.log("Tweet ID STR "+tweet.id_str);
                       // console.log("Screen Name "+tweet.user.screen_name);

                        callback();
                    });

                    
                    
                // may add condition to correspond with delete function here
                }
                else {
                    console.log("No Badge");
                    //send a spunky generic reply 'cause badgebot doesn't know what to do
                    callback();
                }            
            });
        },
        function(err, badge) {
           callback(null,"Done with tweets")
        });
    }
}

//userMentions

function getBadgeFromTweet(tweet, badges, callback) {

    async.waterfall([
        function(callback) {
            hashtagsFound = findHashtags(tweet.text);
            callback(null, hashtagsFound);
        },
        function(hashtagsFound,callback) {
            //hardcoding in for "yourockbadge"
            // may need - send 
            if (_.contains(hashtagsFound, "yourockbadge")) {
                console.log("hashtagsFound: "+hashtagsFound);
                badge = _.find(badges, function (obj) { 
                    return obj.hashtag_id === "yourockbadge"; 
                });
                callback(null,badge);
            // consider condition here for #deleteyourockbadge
            }
            else {
               //console.log("NOPE "+hashtagsFound);
                //send a spunky reply for no hashtag
                callback(null, null); 
            }
        }
    ],
        function(err, result) {
           // console.log("badge "+JSON.stringify(result));
            callback(result);
    });
}

return;

} // end export


/*function processTweets(badges, callback) { 
  T.get('/statuses/mentions_timeline', { count: 800 }, function(err, tweets, response) {
    if (tweets) {
      async.each(tweets, function(tweet, callback) {
        //console.log("TWEET "+JSON.stringify(tweet));
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
              else {
                callback();
              }

            }, function (result) {
            //  console.log("Found Badge "+ JSON.stringify(badge));
              if (result) {
                callback(null, tweet, result);
              }
              else {
                callback("NO BADGE");
              }
              
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
          var criteriaDescription = criteria.description;
          var notYet = criteria.not_met_message;
          var gistFileName = badgeHashtag+'-'+screename+'-'+criteriaHashTag+'.json';
          var assertionGistFilename = badgeHashtag+'-'+screename+'-assertion.json';
          var tweetUrl = 'https://twitter.com/'+screename+'/status/'+tweet.id_str;

          console.log("criteriaHashTag "+ criteriaHashTag);
          console.log("logicFunction "+ logicFunction);
         // console.log("TWEET TEXT: "+tweet.text);
         console.log("assertionGistFilename: "+assertionGistFilename);
         console.log("TWEET RES: "+JSON.stringify(tweet));


          twitter_functions(tweet,logicFunction,function(result){
            var evidenceArr = [];
            if (typeof result !== 'undefined') {
              console.log("FUNCTION RESULT: "+JSON.stringify(result));
              // First see if this criteria has already been submitted
              // This file exists if the assertion exists
              // checking for this file instead of assertion because someday we may want to do something 
              // different if the same criteria has been submiited more than once
              checkGists(gistFileName, function(evidenceBBGist){
                console.log("EVIDENCE BBGIST: "+JSON.stringify(evidenceBBGist));
                if (evidenceBBGist) {
                  checkGists(assertionGistFilename, function(bbGist){
                    console.log("ASSERTION BBGIST: "+JSON.stringify(bbGist));

                    if (bbGist) {
                      var rawUrl = bbGist.files[assertionGistFilename].raw_url;
                      console.log("RAW "+ rawUrl);

                      request({
                        url: rawUrl,
                        json: true
                      }, function (error, response, body) {

                        if (!error && response.statusCode === 200 && body) {

                          console.log("BODY: ");
                          console.log(body.evidence);

                          body.evidence[body.evidence.length] = {
                            "id": tweetUrl,
                            "name": logicFunction,
                            "descripton": criteriaDescription
                          };

                          // get all the names out of the body so we can use to get the image
                          async.series([
                            function(callback) {
                              var i=0;
                              _.each(body.evidence,function(evidence) {
                                i++;
                                evidenceArr.push(evidence.name);
                                if (i==body.evidence.length) {
                                  //console.log("LOGIC NAMEs "+_.uniq(evidenceArr));
                                  evidenceArr = _.uniq(evidenceArr);
                                  callback(null, evidenceArr);
                                }
                              });        
                            },
                            function(callback) {
                              console.log("LOGIC NAMEs "+evidenceArr);
                              createSVGBadgePNG(badgeHashtag, evidenceArr).then((png) => {
                                const base64data = Buffer.from(png).toString('base64');
                                body['base64'] = base64data;
                                callback(null, base64data);
                              });

                            }
                          ],
                          // optional callback
                          function(err, results) {
                            // results is now equal to ['one', 'two']
                            body['base64'] = results[1];
                            console.log("GIST ID: "+bbGist.id);
                            //console.log("BODY: "+JSON.stringify(body));
                            gists.edit({
                                "id": bbGist.id,
                                "files": {
                                  [assertionGistFilename]: {
                                    "content": JSON.stringify(body)
                                  }
                                }
                              }, function(err, rest) {
                               // console.log("REST "+JSON.stringify(rest));
                              });
                          });
                        }
                      });
                    }
                    // it exists then, update the gist - think we need more than match
                  // maybe we fetch it if we know it?
                  // will need the evidence array for the badge image
                  // also need badgeHashtag for the badge image
                  });
                }
                else {
                 // console.log('DOESN"T EXTIST YET');   
                  // make a new assertion
                  // need badgeHashtag for the badge image
                  // need criteriaHashTag for the badge image
                }
              });
            } 
            else {
            //  console.log("NOPE: ");
            //  console.log("LOGIC: "+logicFunction);
             // console.log("Screename: "+screename);
             // console.log("notYet: "+notYet);

              // the tweet didn't fit the criteria
              // use the hashtag to retrieve the message
              //replyfunction
            } 

            
          });


          
            
        }
      ], function (err, result) {
          console.log("err "+err);
          sendReply();
         // callback(null);
        }); 
      });
    }
  });

  //callback(null);
}*/


// Can use this to check to see if gist exist based on supplied filename
function checkGists(fileName, callback) {
  _.each(bbGists,function(bbGist) { 
    bbGistsFile = Object.keys(bbGist.files);
    //console.log('bbGistsFile '+bbGistsFile);
    //console.log('re '+badgeHashtag+'-'+screename+'-'+criteria+'.json');
    //console.log("fileName: "+fileName);
    if (bbGistsFile == fileName){
   // console.log("GIST "+ bbGist.id);
  // var file = bbGist.files[bbGistsFile];
  // console.log("RAW "+ file.raw_url);

   //  console.log("GIST "+ JSON.stringify(bbGist));
      //console.log("MATCH");
      callback(bbGist);
    }
    else {
     // console.log("NO MATCH");
      callback();
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
     // console.log("TWEET MEDIA URL: "+JSON.stringify(media.media_url));
      if (isImageUrl(media.media_url)) {
        //fix so it returns all of the photos
        resultBool = true;
        resultArr.push({content:media.media_url,result:resultBool});
        callback(resultArr)
      }
      callback();
    }); 
  }
  else if (logicFunction == "tweet_url") {
    //console.log(JSON.stringify(tweet));
   // console.log("TWEET URLs: "+tweet.entities.urls);
    if (tweet.entities.urls.length > 0) {
      _.each(tweet.entities.urls,function(tweet) { 
        //fix so it returns all of the photos
       // console.log("TWEET URL: "+tweet.url);
        if (isUrl(tweet.url)) {
          resultBool = true;
          resultArr.push({content:tweet.url,result:resultBool});
          callback(resultArr);
        }
        callback();
      }); 
    }
    else {
     // console.log("hey wha?"); // this isn't working - come back & test for not passing
     // console.log("NO URLS");
      //resultArr.push({error:"Missing URL"});
      callback();
    }
  }

  else if (logicFunction == "tweet_gif") {
    //console.log(JSON.stringify(tweet));
   // console.log("TWEET VIDEO INFO: "+JSON.stringify(tweet.extended_entities.media));
    _.each(tweet.extended_entities.media,function(media) { 
     // console.log("TWEET MEDIA URL: "+JSON.stringify(media.video_info.variants[0].url)); //twitter may do more than one variant at some point and this maybreak
        if (media.video_info.variants[0].url) {
          resultBool = true; //setting to true because twitter insrets this - revisit
          resultArr.push({content:media.video_info.variants[0].url,result:resultBool});
          callback(resultArr);
        }
        callback();
    });
  }
  else if (logicFunction == "tweet_text") {
    //console.log(JSON.stringify(tweet));
   // console.log("TWEET TEXT: "+tweet.text);
    var regexp = /\#\w\w+\s?|@BadgeBotio|@badgebotio/g;
    var tweetText = tweet.text.replace(regexp, '');
    tweetText.trim();
    console.log("TWEET TEXT SANS HASHTAGS: "+tweetText+' '+tweetText.length);
    if (tweetText.length > 1) {
      resultBool = true;
      resultArr.push({content:tweet.text,result:resultBool});
      callback(resultArr);
    }
    callback();
  }

}

function sendReply(){
  console.log("REPLY HERE");
}

