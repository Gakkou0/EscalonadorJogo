const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'escalonador'
})

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });

const insert = function(name, userName, email, password, matchesCampaingMode, matchesSurvivalMode, survivalHighScore, campaingHighScore, campaingDefeat){
  const sql = 'INSERT INTO player(name, userName, email, password, matchesCampaingMode, matchesSurvivalMode, survivalHighScore, campaingHighScore, campaingDefeat) VALUES (?,?,?,?,?,?,?,?,?)'
  const values = [name, userName, email, password, matchesCampaingMode, matchesSurvivalMode, survivalHighScore, campaingHighScore, campaingDefeat]
  connection.query(sql,values)
}
