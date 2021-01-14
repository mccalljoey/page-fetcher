const fs = require("fs");
const { connect } = require("http2");
const request = require('request');

const arguments = process.argv.slice(2)

request(arguments[0], (error, response, body) => {
  fs.writeFile(arguments[1], body, callback = (err) => {
    console.log(err);
  })
  console.log(`Downloaded and saved bytes to ${arguments[1]}.`)
});