// const http = require('node:http');
const armstrong = require('./armstrong');
const recursion = require('./recursion');
const palendrom = require('./palendrom');
const event_loop = require('./event_loop');
const logcode = require('./utilitiz/helper');
// const hostname = '127.0.0.1';
const PORT = 5000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const express =require("express");

const app = express();

app.get("/api",(req, res)=>{

    // res.write(armstrong.calculateArm(407));
    // res.end();

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

//   res.write(recursion.recursion(5).toString());
//   res.write(palendrom.isPalendromNum(343).toString());
  // res.write(palendrom.isPalendromStr("MALAYALAM").toString());
//   res.end(armstrong.calculateArm(407));
  logcode.logcode("hi")
    //  res.write(event_loop.eventLoop3());
  res.end(); 
     
    // res.json({"users":["har", "bhar", "ghar"]});
});

app.listen(5000,()=>{console.log("Most important server running at "+PORT);});

