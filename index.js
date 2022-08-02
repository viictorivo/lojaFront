const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParses.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/",(req, res) => {
    res.render("index");
})

app.get("/registrar", (req, res) =>{
    var name = req.body.name;
    var category = req.body.category;
    var price_sale = req.body.price_sale;
    var price_cost = req.body.price_cost;
    var amount = req.body.amount;
    var date = req.body.date;
})

app.listen( 8080, () => {});