var fs = require("fs");
var zlib = require('zlib');

fs.createReadStream('./public/que5.txt.gz')
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream('./public/que5.txt','utf-8'));
  
console.log("Decompressed.");