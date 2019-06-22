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
module.exports = function(badgeName, completeCriteria) {
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
    var lastTweetId = db.get("lastTweetId").toString();
    //var lastTweetId = "1141766497540464640";
    //console.log("lastTweetId "+lastTweetId);

    var options = {count: 200};
    if (lastTweetId) { options.since_id = lastTweetId; }

    console.log("options "+ JSON.stringify(options));

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
                                    gistOptions = { //replace hardcoded badge name in description
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
                                                "id:": tweetUrl,
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
                                    }, function(err, rest) {
                                        //console.log("REST "+JSON.stringify(rest));
                                        callback(null,rest);
                                    });
                                }
                            ],
                                function(err, result) {

                                    claimUrl = "http://badgebot.io/earned/"+result.id;
                                    msg = "Congratulations @"+earner+"! @"+tweet.user.screen_name+" issued you a #yourockbadge. You can view this badge here: "+claimUrl; //get rid of hard coded name

                                    createSVGBadgePNG('you-rock-badge', []).then((png) => {
                                        const base64data = Buffer.from(png).toString('base64');
                                        //console.log("here is base64png", base64data);

                                        T.post('media/upload', { media_data: base64data }, function (err, data, response) {

                                            var mediaIdStr = data.media_id_string
                                            var altText = "You Rock Badge Image"
                                            var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }

                                            T.post('media/metadata/create', meta_params, function (err, data, response) {
                                                if (!err) {
                                                    // now we can reference the media and post a tweet (media will attach to the tweet)
                                                    var params = { status: msg, media_ids: [mediaIdStr] }
 
                                                    T.post('statuses/update', params, function (err, data, response) {
                                                        console.log(data)
                                                        callback();
                                                    });
                                                }
                                            });
                                        });

                                    });
                                },
                                function(err,result) {
                                    callback(null, result);
                                });
                        },
                        function (err, result) {
                            callback(null, "done with earners");
                        }); 


                        /**- tweet response
                            - congratulations message
                            - picture of badge
                            - link to where to view it

                            badgebot.io:
                                - nodejs site started with theme. Yay!
                                - page for each earned badge with notes about coming soon and what an open badge is
                                - page for you rock badge
                                - Landing page
                                - About can explain why
                                - add with support from Participate - link to Participate
                                - run badebotjs on cron: 
                                - https://www.npmjs.com/package/cron
                                -https://stackoverflow.com/questions/53688945/are-child-processes-for-cron-jobs-in-node-js-recommended
                                -freessl: https://itnext.io/node-express-letsencrypt-generate-a-free-ssl-certificate-and-run-an-https-server-in-5-minutes-a730fbe528ca
                                https://www.npmjs.com/package/greenlock

                                - set up an aws instance to host

                        **/
                       // console.log("Tweet Text "+tweet.text);
                       // console.log("Tweet ID "+tweet.id);
                      //  console.log("Tweet ID STR "+tweet.id_str);
                       // console.log("Screen Name "+tweet.user.screen_name);

                       // callback();
                    });

                    
                    
                // may add condition to correspond with delete function here
                }
                else {
                    console.log("No Badge");
                    var params = { status: '@'+tweet.user.screen_name+', did you wish to issue a badge? Learn more about the prototype here: http://badgebot.io', media_ids: [mediaIdStr] }
                    T.post('statuses/update', params, function (err, data, response) {
                        //console.log(data)
                        callback();
                    });
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
}