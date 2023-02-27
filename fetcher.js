//Goals:
//1)should take 2 cmd line args
//  -URL
//  -local file path, CREATE INDEX.HTML FILE IN DIRECTORY
//2)should download URL's resource to local file path given
//3)should console.log msg like "Download complete and [#] bytes saved to [local file path]"


const request = require('request');
const fs = require('fs');

const targetURL = process.argv[1]; 
//the url meant to be downloaded, input on the cmd line, unknown what order yet
const targetFilePath = process.argv[2];
//the location the file will be copied to, unknown order rn

request(targetURL, (err, response, body) => {
  if (err) console.error(err);
  fs.writeFile(targetFilePath, body, err => {
    if (err) console.error(err);

    const fileStats = fs.statSync(targetFilePath);
    const fileSize = fileStats.size;
    console.log(`Download complete: ${fileSize} bytes saved to ${targetFilePath}`);

  });

});
