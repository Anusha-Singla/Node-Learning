const mongoose = require('mongoose');

//Connection Created 
mongoose.connect("mongodb://localhost:27017/trainingDb", { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("Connection created..");
})
.catch((err)=>{
    console.log(err);
});
