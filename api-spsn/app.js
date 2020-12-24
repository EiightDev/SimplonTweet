const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

// à mettre dès le début afin de prendre en compte l'environnement
// prise en compte de la configuartion locale .env
dotenv.config();

// import setup Sequelize
const bdd = require("./models/setup"); 
//création de l'application
const app = express();
//Cross Origin Ressources Sharing
app.use(cors());

// Lecture des objets reçus
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const Route = require("./routes/routes");
app.use("", Route);


const port = process.env.PORT || 8000;

// Ecoute du port uniquement si sequelize atteint la bdd
bdd.sync({alter:true}).then(() => {
  app.listen(port, () => {
    console.log(`L'application s'éxécute dans http://localhost:${port}`);
  });
});