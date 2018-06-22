
// I am making this into its own function so we can apply this to any new
// badges that come from newly added badge images.
const window   = require('svgdom');
const SVG      = require('svg.js')(window);
const svgpath = require('svgpath');
const document = window.document;
const { convert, convertFile } = require('convert-svg-to-png');
// var svgpath = require('svgpath');
const fs = require('fs');



transformSvg();
/* Read the SVG, transform the SVG, then create a PNG and post it to twitter. */
function transformSvg() {
  const draw = SVG(document.documentElement);
  // const svgFile = draw.use("./test.svg");
  //we need to be able to add rects to the existing svg file in `./test.svg`
  // var svgText = fs.readFileSync(, { encoding: 'utf8' })
  // console.log("text", svgText);
  var svgPath = svgpath("./test.svg");
  console.log(svgPath)
  var svgFile = draw.path(svgPath);

  console.log("testing this localConvert");
  console.log("file", svgFile.svg());
  localConvert(svgFile.svg()).then((png) => {
    console.log(png);
    const base64data = Buffer.from(png).toString('base64');
    // // var base64Data = png.replace(/^data:image\/png;base64,/, "");
    fs.writeFile("out.png", base64data, 'base64', function(err) {
      console.log(err);
    });

    console.log("finished converting");
  });

  // fs.writeFile("./testingagain.png", png, (err) => {
  //   if (err) throw err;
  //   console.log('The file has been saved!');
  // });
  // localConvert(svg.toString(), "doesthiswork.png").then(() => {
  //   console.log("something might be working");
  // });
}
/*
Post a tweet with media

pngFileName: this must be the png file
status: This is going to be the text associated with the png
altText: this will be applied as the alt tag on the image
*/
function postBadgeWithMedia(pngFileName, status, altText = "") {
  var b64content = fs.readFileSync(fileName, { encoding: 'base64' })

  // // first we must post the media to Twitter
  T.post('media/upload', { media_data: b64content }, function (err, data, response) {
    // now we can assign alt text to the media, for use by screen readers and
    // other text-based presentations and interpreters
    var mediaIdStr = data.media_id_string
    var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }

    T.post('media/metadata/create', meta_params, function (err, data, response) {
      if (!err) {
        // now we can reference the media and post a tweet (media will attach to the tweet)
        var params = { status: status, media_ids: [mediaIdStr] }

        T.post('statuses/update', params, function (err, data, response) {
          console.log(data)
        })
      }
    })
  })
}

function postBadgeWithMediaFileName(pngFileName, status, altText = "") {
  var b64content = fs.readFileSync(fileName, { encoding: 'base64' })

  // // first we must post the media to Twitter
  T.post('media/upload', { media_data: b64content }, function (err, data, response) {
    // now we can assign alt text to the media, for use by screen readers and
    // other text-based presentations and interpreters
    var mediaIdStr = data.media_id_string
    var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }

    T.post('media/metadata/create', meta_params, function (err, data, response) {
      if (!err) {
        // now we can reference the media and post a tweet (media will attach to the tweet)
        var params = { status: status, media_ids: [mediaIdStr] }

        T.post('statuses/update', params, function (err, data, response) {
          console.log(data)
        })
      }
    })
  })
}

 //console.log('badgesFileList '+ badgesFileList);
//configure the twit package with our API keys

var badgehashtags = ["#testbadge", "#testbadge2"];

/* uncomment the line below to see how the localConvert works */
async function localConvert(input, outputFilePath) {
  let options = { width: 200, height: 200 };
  if (outputFilePath) {
    options = { ...options, filename: outputFilePath };
  }

  console.log("options", options);
  return await convert(input, options).then((data) => {
    console.log("Successfully converted");
    return data;
  }, (error) => {
    const errorString = "ERROR:" + error;
    console.log(errorString);
    return errorString;
  });
}

// I am making this into its own function so we can apply this to any new
// badges that come from newly added badge images.
localConvertFile("test.svg", "anothername.png")

// this will convert any files from svg -> png
async function localConvertFile(inputFilePath, outputFilePath) {
  let options = {};
  if (outputFilePath) {
    options = { ...options, outputFilePath };
  }

  // PLUGIN from: https://www.npmjs.com/package/convert-svg-to-png
  return await convertFile(inputFilePath, options).then((outputPath) => {
    const successString = "You can find the recently created png at " + outputPath;
    //console.log(successString);
    return successString;
  }, (error) => {
    const errorString = "ERROR:" + error;
    //console.log(errorString)
    return errorString;
  });
}
