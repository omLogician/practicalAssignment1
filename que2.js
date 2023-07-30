const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
  if(req.method == 'GET')
  {
    if(req.url == '/getHello')
    {
      fs.readFile('./public/que2.html', (err, data)=>{
        if(err)
        {
          return res.send("Something went wrong");
        }
        else
        {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          return res.end();
        }
      })
    }
    if(req.url == '/ajaxCall' && req.method == "GET")
    {
      fs.readFile('./public/que2(1).html', (err, data)=>{
        if(err)
        {
          return res.send("Something went wrong");
        }
        else{
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          return res.end();
        }
      })
    }
  }
})

server.listen(8080);

console.log("SEVER STARTED");