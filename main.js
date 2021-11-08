const fs = require('fs');

const readStream = fs.createReadStream('data.txt');
const writeStream = fs.createWriteStream('copyData.txt');

readStream.pipe(writeStream);

// duzi nacin gore je kraci i uobicajeni
// readStream.on('data', function (chunk) {
//     writeStream.write(chunk);
// })

// readStream.on('open', function (){
//     console.log('Stream open');
// })

// readStream.on('close', function (){
//     console.log('Stream close');
// })