const express = require("express");
const app = express();
const axios = require("axios");
const bodyParser = require('body-parser');


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/",(req, res) => {
    res.render("index");
})

app.get("/registrar", (req, res) =>{
    res.render("registration");
});

app.post("/registro", (req, res) => {
})

app.listen( 8080, () => {});