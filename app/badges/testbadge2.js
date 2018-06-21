module.exports = {
    badge_name: "Find Your Community",  //temp name
    type: "accretion",
    svg_file: "testbadge2-svg.svg", 
    hashtag_id: "#testbadge2",
    description: "This is testbadge2", 
    //expires_date: //maybe use this to turn it off?
    criteria_description: "blah blah",
    criteria:[
        {
            hashtag_id: "#blah",
            description: "description here",
            evidence_required: "describe image types allowed through twitter",
            logic: "code regex for image type",
            not_met_message: "I don't see a photo here. Try again!",
            success_message: "Great shot!",
            svg: ""
        }
        
    ],
    faqs: [
        {
            question: "Is this testbadge 2",
            answer: "Yes!"
        }
    ]
}