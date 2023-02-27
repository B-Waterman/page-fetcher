//Goals:
//1)should take 2 cmd line args
//  -URL
//  -local file path, CREATE INDEX.HTML FILE IN DIRECTORY
//2)should download URL's resource to local file path given
//3)should console.log msg like "Download complete and [#] bytes saved to [local file path]"

//Make https request, wait for response
//  -GET: summon thy resource from webpage
//then write resource data to file


const request = require('request');
const fs = require('fs');

const targetURL = process.argv[]; 
//the url meant to be downloaded, input on the cmd line, unknown what order yet
const targetFilePath = process.argv[];
//the location the file will be copied to, unknown order rn

request(targetURL, (err, response, body) => {
  if (err) console.error(err);
  fs.writeFile(targetFilePath, body, err => {
    if (err) {
      console.error(err);
    }
  });

});
