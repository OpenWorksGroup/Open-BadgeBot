const express = require('express');
const app = express();

const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(express.static(path.join(__dirname, 'public')));

//app.set('views', path.join(__dirname, 'app/views'));
app.set('views', [path.join(__dirname, 'app/views'), path.join(__dirname, 'app/views/_shared/')]);
app.set('view engine', 'ejs');

//require('./config/routes.js')(app);

app.listen(3000, () => console.log('Example app listening on port 3000!'));

app.get('/', function(req, res) {
    res.render('index', {title: 'Open BadgeBot'});
})

//http://theusualstuff.com/create-twitter-bot-node-js-twit-package/
//https://codeburst.io/build-a-simple-twitter-bot-with-node-js-in-just-38-lines-of-code-ed92db9eb078
//https://developer.twitter.com/en/docs/api-reference-index
//https://developer.twitter.com/en/docs/basics/rate-limiting.html
//https://developer.twitter.com/en/docs/developer-utilities/twitter-text --someday?
//https://apps.twitter.com/app/15182189/show

//use the Twit package
var Twit = require('twit');  
var findHashtags = require('find-hashtags');
 
//call the API keys we saved in the config.js file
var twitConfig = require('./config/twit');  
var badge = require('./badge-participate-community.js');  // stubbing out the manifest. 
/*Thinking of a system that looks for badges so we can have multiple badges that are active and inactive*/

//DEBUG TO VIEW BADGE DATA

console.log('BADGE:');

Object.keys(badge).forEach(function(key) {
    if (key === "criteria") {
        var criteria = badge[key];
        i = 1;
        criteria.forEach(function(prop) {
            console.log('=====================');
            console.log('Criteria '+ i++ + ':');
            Object.keys(prop).forEach(function(key) {
                console.log(key + ' '+ prop[key]);
            });
        });
    }
    if (key === "faqs") {
        var faqs = badge[key];
        i = 1;
        faqs.forEach(function(prop) {
            console.log('=====================');
            console.log('FAQ '+ i++ + ':');
            Object.keys(prop).forEach(function(key) {
                console.log(key + ' '+ prop[key]);
            });
        });
    }
    else {
        console.log(key + ' '+ badge[key]);
    }
});
//console.log('Badge Name: '+ badge.badge_name);
//console.log('hashtag_id: '+ badge.hashtag_id);
 
//configure the twit package with our API keys
var T = new Twit(twitConfig); 

T.get('/statuses/mentions_timeline', { count: 800 }, function(err, data, response) {
    //console.log(data);
    if (data) {
        data.forEach(function(mention) {
            console.log(mention.user.screen_name);
            console.log(mention.text);
            console.log(findHashtags('This #badgename contains a number of #useful hashtags'));
           // reply = '@' + mention.user.screen_name + ' thanks for reaching out!'
           // T.post('statuses/update', { status: reply, in_reply_to_status_id: mention.id_str }, function(err, data, response) {              
            //    console.log(data)
           // });
        });
    }
});




//app.get('/', (req, res) => res.send('Hello World!'));
