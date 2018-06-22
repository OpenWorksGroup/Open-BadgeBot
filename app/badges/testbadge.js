module.exports = {
    badge_name: "Find Your Community",  //temp name
    type: "accretion",
    svg_file: "testbadge-svg.svg", 
    hashtag_id: "testbadge",
    description: "Earn an Open Badge at the 2018 BadgeSummit & ISTE Conference", 
    //expires_date: //maybe use this to turn it off?
    criteria_description: "This is a longer description that gets displayed with the criteria",
    criteria:[
        {
            hashtag_id: "photo",
            badge_color: "#E27D60",
            description: "Post a photo with someone you follow on social media who you met at this event.",
            evidence_required: "describe image types allowed through twitter",
            logic_function: "twitter_photos", // just testing that the url is an image type
            not_met_message: "I don't see a photo here. Try again!",
            success_message: "Great shot!",
            svg: ""
        },
        {
            hashtag_id:"resource",
            badge_color: "#85DCB0",
            description: "Share a link to your favorite tool or resource that you’ve learned about at this event",
            evidence_required: "valid url",
            logic_function: "tweet_url", // just testing that is a url for now
            not_met_message: "That resource is not readable by this machine. Try again!",
            success_message: "Thanks for sharing!",
            svg: ""
        },
        {
            hashtag_id:"learned",
            badge_color: "#E8A87C",
            description: "Choose a gif that encapsulates something you've learned at this event.",
            evidence_required: "gif or other imagetype?", //need to test what this arrives as via twitter
            logic_function: "tweet_gif",
            not_met_message: "I don't see a gif.",
            success_message: "Rad. Thanks for sharing!",
            svg: ""
        },
        {
            hashtag_id:"oh",
            badge_color: "#C38D9E",
            description: "Tweet something you heard or read at this event that changed your thinking. If you know it, include the twitter account of who said it.",
            evidence_required: "text", //need to test what this arrives as via twitter
            logic_function: "tweet_text", // 
            not_met_message: "What was that? Try again please.",
            success_message: "Verrry interesting!",
            svg: ""
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
