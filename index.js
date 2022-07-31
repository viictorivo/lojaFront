const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.get("/",(req, res) => {
    res.render("index");
})

app.get("/registrar", (req, res) =>{
    res.render("registration");
})

app.listen( 8080, () => {});