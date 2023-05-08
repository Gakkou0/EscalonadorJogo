const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'escalonador'
})

connection.connect(function (err){
    console.log("deu certo")
})