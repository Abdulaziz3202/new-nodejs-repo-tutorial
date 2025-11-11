const http=require('http');

const EventEmitter= require('events');

class Emitter extends EventEmitter{};

const myEmitter= new Emitter();

const PORT=process.env.PORT || 3500;

const server= http.createServer((req, res)=>{

console.log("Receiving  request and below are the details:");
console.log(req.url, req.method);

});

server.listen(PORT,()=>console.log("Server is running now!"));