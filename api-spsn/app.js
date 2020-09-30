const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql2')

const bdd = mysql.createConnection({
  host: 'localhost',
  database: 'simplon-tweet',
  user: 'root',
  password: '',
  port:3306
});

app.use(cors())
const Route = require('./routes/routes').init(bdd);
app.use('/', Route);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`L'application s'éxécute dans http://localhost:${port}`)
})