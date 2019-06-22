module.exports = {
    badge_name: "You Rock! Badge",
    type: "recognition",
    svg_file: "you-rock-badge.svg", //pull from gist file? maybe link to badgeclass & svg
    hashtag_id: "yourockbadge",
    description: "Recipients of this badge are being recognized for making an impact.", 
    //expires_date: //maybe use this to turn it off?
    long_description: "Every day we meet people who make a difference in our lives and the lives of others. Let these folks know that they rocked your world.",
    support_description: "This is the inaugural BadgeBot badge initially prototyped at <a href=\"//twitter.com/BadgeSummit\" target=\"_blank\" title=\"Badge Summit\">Badge Summit 2019</a> in Philadelphia, PA. Support for this project has been provided by <a href=\"http://participate.com\" target=\"_blank\" title=\"Participate.com\">Participate.com</a>, a long-time issuer and supporter of Open Badges and the <a href=\"https://www.openrecognition.org/\" target=\"_blank\" title=\"Open Recognition Alliance\">Open Recognition Movement</a>. Participate's work is rooted in the understanding that learning is a social activity. No matter the context, humans learn best and are quicker to find meaning in new concepts through collaboration and interaction with peers.", 
    criteria:[
        {
            hashtag_id: "#yourockbadge",
            delete_hashtag_id: "#deleteyourockbadge",
            description: "<p>Send a tweet to <a href=\"//twitter.com/@BadgeBotio\" target=\"_blank\" title=\"Badge Bot Twitter\"><strong>@badgebotio</strong></a> from your twitter account. Include <b>#yourockbadge</b>,  the @username(s) you intend to recognize, and the message explaining why you are recognizing them in your tweet.</p><p>The BadgeBot will review your tweet. If it finds the hashtag and the usernames in the tweet, it will issue the badge and tweet it to the @username(s). You will be included in this tweet and should get a notification on twitter.</p><p>The tweet sent to @username(s) will include the badge image and a link to where they can view the badge and its details.</p>",
            evidence_required: "Link to your tweet to @badgebotio.",
            optional: "Include a gif, photo or video.",
            logic_function: "tweet_text",
            not_met_message: "",
            success_message: "",
            example_tweet: "@badgebotio Please issue a #yourockbadge to @USWomensoccerT1 for their fight for pay equality."
        }
        
    ],
    faqs: [
        {
            question: "Who can I issue this badge to?",
            answer: "Any Twitter user."
        },
        {
            question: "Can I issue one to myself?",
            answer: "Sure! Self-love and recognition is important!"
        },
        {
            question: "What if I forget the hashtag?",
            answer: "Then BadgeBot won't know what badge you intend to send. Please send your tweet again."
        },
        {
            question: "What if I forget the message about the @username?",
            answer: "The BadgeBot will still issue the badge and send the tweet."
        },
        {
            question: "Are these badges public or private?",
            answer: "These are all public tweets so the badges are public too."
        },
       /* {
            //question: "Can the earner refuse the badge?",
            //answer: "Right now there is no approval process but earners can request that the badge & tweet be deleted by sending a DM to @badgebotio with a link to the earned badge. <!-- figure this out may just be a dm-->"
        },*/




    ]
}