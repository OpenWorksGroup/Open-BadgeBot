module.exports = {
    badge_name: "Example Badge",
    type: "recognition",
    svg_file: "example-badge.svg", //name of SVG file
    hashtag_id: "examplebadge",
    description: "Description of badge", 
    //expires_date: //maybe use this to turn it off?
    long_description: "",
    support_description: "", 
    criteria:[
        {
            hashtag_id: "#examplebadge",
            delete_hashtag_id: "#deleteexamplebadge", //not being used
            description: "",
            evidence_required: "",
            optional: "",
            logic_function: "",
            not_met_message: "",
            success_message: "",
            example_tweet: ""
        }
        
    ],
    faqs: [
        {
            question: "",
            answer: ""
        },
        {
            question: "",
            answer: ""
        }
    ]
}