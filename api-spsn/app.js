const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

// à mettre dès le début afin de prndre en compte l'environnement
// prise en compte de la configuartion locale .env
dotenv.config();

// import setup Sequelize
const bdd = require("./models/setup"); 
//création de l'application
const app = express();

// Lecture des objets recu
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Cross Origin Ressources S
app.use(cors());
const Route = require("./routes/routes").init(bdd);
app.use("/", Route);

const port = process.env.PORT || 8000;

// Ecoute du port uniquement si sequelize atteint la bdd
bdd.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`L'application s'éxécute dans http://localhost:${port}`);
  });
});