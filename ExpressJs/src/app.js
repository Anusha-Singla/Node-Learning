const path = require('path');
const express = require('express');
const { Server } = require('http');
const app = express();

const staticPath = path.join(__dirname,'../public');
console.log(staticPath);
app.use(express.static(staticPath));

app.get('/', (req, res)=>{
    res.send("Hello from Server");
});

app.listen(8000, ()=>{
    console.log("Server is listening to port 8000");
});