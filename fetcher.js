const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const localPath = process.argv[3];

const fetchAndSave = (url, localPath) => {
  request(url, (error, response, body) => {
    let content = body;
    fs.writeFile(localPath, content, (err) => {
      if (error) {
        console.log("error");
        return;
      }
      console.log(`file written successfully, a total of ${getFilesizeInBytes(localPath)} bytes in the following file path: ${localPath}`);
    });
  });
};

//function to use for filesize
function getFilesizeInBytes(filename) {
  const stats = fs.statSync(filename);
  const fileSizeInBytes = stats.size;
  return fileSizeInBytes;
}

fetchAndSave(url, localPath);
