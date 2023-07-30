const WebSocket = require('ws');
const http = require('http');
const fs = require('fs');

const httpServer = http.createServer(function(req, res)
{
  if(req.url == '/')
  {
    fs.readFile('./public/que4.html', (err, data)=>{
      res.write(data);
      res.end();
    })
  }
}).listen(8080, function(){
  console.log((new Date()) + 'Server is running on 8080');
});

const wsServer = new WebSocket.Server({server: httpServer});
wsServer.on("connection", (clientws)=>{
  clientws.send("Hello Client");
  clientws.on("message", (msg)=>{
    console.log("received " + msg);
    clientws.send("received " + msg);
  })
})