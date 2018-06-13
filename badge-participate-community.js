module.exports = {
    badge_name: "Find Your Community",  //temp name
    svg_file: "badge-participate-community-svg.svg", 
    hashtag_id: "#participatecommunitybadge",
    description: "Earn an Open Badge at the 2018 BadgeSummit & ISTE Conference", 
    //expires_date: //maybe use this to turn it off?
    criteria_description: "This is a longer description that gets displayed with the criteria",
    criteria:[
        {
            hashtag_id: "#PHOTO",
            narrative: "Post a photo with someone you follow on social media who you met at this event.",
            evidence_required: "describe image types allowed through twitter",
            logic: "code regex for image type",
            not_met_message: "I don't see a photo here. Try again!",
            success_message: "Great shot!",
            svg: ""
        },
        {
            hashtag_id:"#TOOL",
            narrative: "Share a link to your favorite tool or resource that you’ve learned about at this event",
            evidence_required: "valid url",
            logic: "code regex for url; ping url",
            not_met_message: "I can't get to that resource. Try again!",
            success_message: "Thanks for sharing!",
            svg: ""
        },
        {
            hashtag_id:"#LEARNED",
            narrative: "Post a gif or meme that encapsulates something you've learned at this event.",
            evidence_required: "gif or other imagetype?", //need to test what this arrives as via twitter
            logic: "code regex for ....",
            not_met_message: "I don't see a gif or meme. Try again!",
            success_message: "Rad. Thanks for sharing!",
            svg: ""
        },
        {
            hashtag_id:"#OH",
            narrative: "Tweet something you heard or read at this event that changed your thinking. If you know it, include the twitter account of who said it.",
            evidence_required: "text", //need to test what this arrives as via twitter
            logic: "text", // 
            not_met_message: "What'd you hear? Try again!",
            success_message: "Rad. Thanks for sharing!",
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