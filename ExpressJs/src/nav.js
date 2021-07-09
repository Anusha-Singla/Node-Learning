const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send("Hello from Home Page");
});
app.get('/', (req, res)=>{
    res.send("Hello from Home Page");
});

app.get('/about', (req, res)=>{
    res.send("Hello from about Page");
});

app.get('/contact', (req, res)=>{
    res.send("Hello from contact Page");
});
app.get('/temp', (req, res)=>{
    res.json([
        {
            id: 1,
            name: "Anusha"
        },
        {
            id: 2,
            name: "Aarush"
        }
    ]);
});

app.listen(8000, ()=>{
    console.log("Server is listening to port 8000");
});