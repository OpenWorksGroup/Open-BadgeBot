module.exports = {
    badge_name: "Social Learning",  //temp name
    type: "accretion",
    hashtag_id: "#sociallearningbadge",
    gist_id: "4e8159ecf27faf3539607bc4ab97b9a1",
    description: "Participate & Badge Bot Social Learning Badge", 
    //expires_date: //maybe use this to turn it off?
    criteria_description: "",
    criteria:[
        {
            hashtag_id: "photo",
            badge_color: "#E27D60",
            description: "Post a photo with someone you follow on social media who you met in person.",
            evidence_required: "attached image(s) to tweet",
            logic_function: "twitter_photos", // just testing that the url is an image type
            not_met_message: "I don't see a photo here. Try again!",
            success_message: "Great shot!",
            example_tweet: "Hey @badgebotio #sociallearningbadge #photo [photos attached - Twitter will allow up to four]"
        },
        {
            hashtag_id:"resource",
            badge_color: "#85DCB0",
            description: "Share a link to your favorite tool or resource that you’ve learned from a friend or colleague or would like to share with. If you know it, tag the Twitter account of who said it.",
            evidence_required: "URL(s)",
            logic_function: "tweet_url", // just testing that is a url for now
            not_met_message: "That resource is not readable by this machine. Try again!",
            success_message: "Thanks for sharing!",
            example_tweet: "Yo! @badgebotio #sociallearningbadge #resource go.participate.com/find-your-community @markjotter"
        },
        {
            hashtag_id:"learned",
            badge_color: "#E8A87C",
            description: "Choose a gif that encapsulates something you've learned this week.",
            evidence_required: "Gif added in using Twitter’s tweet interface", //need to test what this arrives as via twitter
            logic_function: "tweet_gif",
            not_met_message: "I don't see a gif.",
            success_message: "Rad. Thanks for sharing!",
            example_tweet: "Check this! @badgebotio #sociallearningbadge #learned [Gif added in using Twitter’s tweet interface]"
        },
        {
            hashtag_id:"oh",
            badge_color: "#C38D9E",
            description: "Tweet something you heard or read this week that changed your thinking. If you know it, include the Twitter @account of who said it.",
            evidence_required: "Text", //need to test what this arrives as via twitter
            logic_function: "tweet_text", // 
            not_met_message: "What was that? Try again please.",
            success_message: "Verrry interesting!",
            example_tweet: "@badgebotio #sociallearningbadge #oh “I think if I had to put a finger on what I consider a good education, a good radical education, it wouldn't be anything about methods or techniques. It would be loving people first."
        }
        
    ],
    faqs: [
        {
            question: "When will this badge be available?",
            answer: "During Badge Summit & ISTE 2018"
        },
        {
            question: "Another questionestion?",
            answer: "Another Answer!"
        },

    ]
}
