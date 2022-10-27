const request = require("request"); // => REQUEST FROM SERVER
const fs = require("fs"); // => WRITE FILES

const URL = process.argv.slice(2)[0];
const localPath = process.argv.slice(2)[1];

request(URL, (error, response, body) => {
  if (error) {
    console.log("Error:", error);
    return;
  }
  fs.writeFile(`${localPath}`, body, function (error) {
    if (error) {
      console.log("Error:", error);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`);
    }
    return;
  });
});
