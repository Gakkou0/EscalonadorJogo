const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/Escalonador", {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    family: 4,
}).then(() => {
    console.log("MongoConected")
}).catch((err)=>{
    console.log("MongoDesconected: "+ err)
})

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    userName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    matchesCampaingMode:{
        type:Number
    },
    matchesSurvivalMode:{
        type:Number
    },
    survivalHighScore:{
        type:Number
    }
})

mongoose.model('player', playerSchema)

const Cria = mongoose.model('player')

new Cria({
    name: "123456789",
    userName: "qwertyui",
    email: "qwertyuiop",
    password: "129999",
    matchesCampaingMode:0,
    matchesSurvivalMode:0,
    survivalHighScore: 0
}).save().then(() => {
    console.log("deu certo")
}).catch((err)=>{
    console.log("deu errado: "+ err)
})
