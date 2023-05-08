const express = require('express');
const mysql = require('mysql');
// Initialise Express
const app = express();
// Render static files
app.use(express.static('public'));
// Port website will run on
app.listen(8080);
