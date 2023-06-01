const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const db = require('./scripts/db');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/index.html")
})

app.get("/cadastro", function(req, res){
    res.sendFile(__dirname + "/public/singup.html")

})

app.post("/cadastro", function(req, res){
    const playerData = req.body;
    console.log(req)

    db.insertPlayer(playerData)
      .then(() => {
        res.send('Jogador adicionado com sucesso');
      })
      .catch((error) => {
        console.log(error)
        res.status(500).send('Erro ao adicionar jogador');
      });
})

app.get("/login", function(req, res){
    res.sendFile(__dirname + "/public/login.html")
})

app.get("/game", function(req, res){
  res.sendFile(__dirname + "/public/game.html")
})


app.listen(8080);