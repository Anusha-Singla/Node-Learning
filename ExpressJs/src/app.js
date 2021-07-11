const path = require('path');
const express = require('express');
const { Server } = require('http');
const hbs = require('hbs');
const app = express();

const staticPath = path.join(__dirname,'../public');
const templatePath = path.join(__dirname,'../templates/views');
const partialPath = path.join(__dirname,'../templates/partials');



app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialPath);

// app.use(express.static(staticPath));

app.get("/",(req, res)=>{
    res.render("home.hbs", {
        admin: "anusha"
    });
});
app.get("*",(req, res)=>{
    res.render("404.hbs", {
        errorMessage: "Oops, Page not found..!"
    });
});


app.listen(8000, ()=>{
    console.log("Server is listening to port 8000");
});