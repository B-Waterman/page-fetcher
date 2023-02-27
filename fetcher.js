//Goals:
//1)should take 2 cmd line args
//  -URL
//  -local file path
//2)should download URL's resource to local file path given
//3)should console.log msg like "Download complete and [#] bytes saved to [local file path]"

//Make https request, wait for response
//  -GET: summon thy resource from webpage
//then write resource data to file


const request = require('request');
const fs = require('fs');

const content = 'BLAH';

fs.writeFile('/Users/HappyPathButItsLiterallyMyFilePath', content, err => {
  if (err) {
    console.error(err);
  }
  // Tada the file do be written. Now fill it in.
});