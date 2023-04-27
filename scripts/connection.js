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