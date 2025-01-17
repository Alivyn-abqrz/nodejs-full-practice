const fs = require('fs');

// read streams
const readStream = fs.createReadStream('./readingfiles/docs2.txt', {encoding:'utf8'});
// write streams
const writeStream = fs.createWriteStream('./readingfiles/docs3.txt');

// readStream.on('data', (chuck) =>{
//   console.log(chuck);
//   writeStream.write('\nNew Chunk\n');
//   writeStream.write(chuck);
// })

//piping
readStream.pipe(writeStream);