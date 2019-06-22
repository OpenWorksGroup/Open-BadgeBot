var Gists = require('gists');
const ghConfig = require('../../config/github');
const gists = new Gists(ghConfig);
const request = require("request");
const moment  = require('moment');
const async = require("async");
const createBadge = require("../createbadge.js");
const _ = require('underscore');
var bbGists = [];

exports.read = function(req,res){

    async.waterfall([
        getGist, //assertion
        getBadge
  ], function (err, gist, badge) {

        earner = gist.recipient.identity;
        earner = earner.replace('https://twitter.com/','');
        title = badge.name+" Earned by @"+earner;
        localBadgeFileName = badge.badgebotName;
        issuerName = badge.issuer.name;
        evidence = gist.evidence.id;
        evidenceNarrative = gist.evidence.narrative;
        issuedOn = moment(gist.issuedOn).format('YYYY-MM-DD HH:mm:ss'); 
        badgeFile = require('../badges/'+localBadgeFileName+'.js');

        createBadge(localBadgeFileName, []).then((png) => {
            const base64data = Buffer.from(png).toString('base64');
            console.log("here is base64png", base64data);
            badgeImage = base64data;

            console.log("LocalFilename "+JSON.stringify(localBadgeFileName));

            console.log("GIST "+JSON.stringify(gist));
            console.log("BADGE "+JSON.stringify(badge));

            console.log("EARNER "+JSON.stringify(earner));

            console.log("LOCAL BADGE "+JSON.stringify(badgeFile));

            console.log("ISSUER NAME "+JSON.stringify(issuerName));

            console.log("EVIDENCE "+JSON.stringify(evidence));

            console.log("EVIDENCE "+JSON.stringify(evidenceNarrative));

            console.log("ISSUED ON "+JSON.stringify(issuedOn));


            return res.render('assertion', {
                title: title,
                description: badge.description,
                badge: badgeFile,
                badgeImage: badgeImage,
                earner: earner,
                issuedOn: issuedOn,
                evidence: evidence,
                evidenceNarrative: evidenceNarrative 
            });
        });
    });

    function getGist(callback) {
        var assertionId = req.params.assertionId;
        //.log("assertionId "+assertionId);
        request('https://gist.githubusercontent.com/badgebotio/'+assertionId+'/raw',
        function(err,response,body) {
            gist = JSON.parse(body);
            // console.log("GIST "+JSON.stringify(gist.badge));
            callback(null,gist);
        });
    }

    function getBadge(gist,callback) {
        request(gist.badge,
        function(err,response,body) {
            badge = JSON.parse(body);
            //console.log("BADGE "+JSON.stringify(badge));
            callback(null,gist,badge);
        });
    }
}