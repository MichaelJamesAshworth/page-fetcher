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

function getFilesizeInBytes(filename) {
  const stats = fs.statSync(filename);
  const fileSizeInBytes = stats.size;
  return fileSizeInBytes;
};
//need to make an http request (use request)

//Use node's fs filsystem module to write the file fs.writeFile()

//file size 1 char = 1 byte

fetchAndSave(url, localPath)
