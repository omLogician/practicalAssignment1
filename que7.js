const fs = require('fs');
const removeFile = (filePath) =>{
  return new Promise((resolve, reject)=>{
    fs.unlink(filePath, (err)=>{
      if(err)
      {
        return reject(err);
      }
      else
      {
        return resolve("File Removed");
      }
    })
  })
}

removeFile('./public/que7.txt').then(msg=>{
  console.log(msg);
}).catch(error)
{
  console.log(error);
}