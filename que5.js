const fs = require('fs');
const zlib = require('zlib');

fs.createReadStream('/public/que5.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('./public/que5.txt.gz'));
console.log("Compressed!!");