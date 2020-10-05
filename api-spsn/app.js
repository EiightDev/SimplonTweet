const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql2')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')

dotenv.config()

const bdd = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port:process.env.DB_PORT
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())
const Route = require('./routes/routes').init(bdd);
app.use('/', Route);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`L'application s'éxécute dans http://localhost:${port}`)
})