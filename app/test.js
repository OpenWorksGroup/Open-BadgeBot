/* to demonstrate how to use the badge creator, run this file */
const createBadge = require("./createbadge.js");
const fs = require('fs');

createBadge("testbadge", ["photo", "resource", "learned", "duh"]).then((png) => {
    const base64data = Buffer.from(png).toString('base64');
    console.log("here is base64png", base64data);

    // for testing purposes, we can write the file out
    // fs.writeFile("out.png", base64data, 'base64', function(err) {
    //   console.log(err);
    // });

    return base64data;
});
