const ThenPromise = require('promise');

const connecting = async () => {
  if(global.connection && global.connection.state !== "disconnected"){
    return global.connection
  }

  const mysql = require('mysql2/promise')
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

  global.connection = connection
  return connection
}


async function insertPlayer(player){
  const conn = await connecting()
  const sql = 'INSERT INTO player(name, userName, email, password, matchesCampaingMode, matchesSurvivalMode, survivalHighScore, campaingHighScore, campaingDefeat) VALUES (?,?,?,?,?,?,?,?,?)'
  const values = [player.name, player.userName, player.email, player.password, player.matchesCampaingMode, player.matchesSurvivalMode, player.survivalHighScore, player.campaingHighScore, player.campaingDefeat]
  conn.query(sql,values)
}

async function deletePlayer(value){
  const conn = await connecting()
  const sql = 'DELETE FROM player WHERE playerId=?;'
  conn.query(sql,[value])
}

async function updatePlayer(value, player){
    const conn = await connect();
    const sql = 'UPDATE player SET name = ?, userName = ?, email = ?, password = ?, matchesCampaingMode = ?, matchesSurvivalMode = ?, survivalHighScore = ?, campaingHighScore = ?, campaingDefeat = ? WHERE playerId=?';
    const values = [player.name, player.userName, player.email, player.password, player.matchesCampaingMode, player.matchesSurvivalMode, player.survivalHighScore, player.campaingHighScore, player.campaingDefeat,value];
    return await conn.query(sql, values);
}

module.exports = {insertPlayer, deletePlayer, updatePlayer}

