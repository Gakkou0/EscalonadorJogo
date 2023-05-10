(async ()=>{
    const db = require('./scripts/db')
})()

const express = require('express');
const app = express();

//app.use(express.static('public'));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/index.html")
})

app.get("/cadastro", function(req, res){
    res.sendFile(__dirname + "/public/singup.html")
})

app.get("/login", function(req, res){
    res.sendFile(__dirname + "/public/login.html")
})

app.listen(8080);