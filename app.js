var express = require('express');

var app = express();

app.set("view engine", "jade");

app.get("/", function (req, res) {
	res.render("index");
});

app.get("/:value", function (req, res) {
	res.render("form", {name: req.params.value});
});

app.post("/", function (req, res) {
	res.render("form");
});

app.listen(8080);