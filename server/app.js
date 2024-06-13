const express = require("express");
const mysql = require("mysql");
const myConnection = require("express-myconnection");
const app = express();

const optionBd = {
    host: 'localhost'
}

app.use((req,res) => {
    res.status(404).render("pageIntrouvables");
})

app.listen(3001);
console.log("Attente de reqêtes au port 3001");