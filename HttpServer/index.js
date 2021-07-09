const fs = require('fs');
const http = require('http');
const url = require('url');

fs.readFile("userApi.json", "utf-8", (err, data)=>{
    console.log(data);
    const objData = JSON.parse(data);
});
const server = http.createServer((req, res)=>{
    if(req.url == "/"){
        res.end("Hello from server");
    }else if(req.url == "/contact"){
        res.end("Hello from server/contact");
    }else if(req.url == "/about"){
        res.end("Hello from server/about");
    }else if(req.url == "/userApi"){
            res.end(objData[0].name);
    }else{
        res.writeHead(404, {"Content-type": "text/html"});
        res.end("<h1>Page not found</h1>");
    }
});

server.listen(8000, ()=>{
    console.log("Server is listening to port 8000");
});