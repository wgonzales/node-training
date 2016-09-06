var express = require('express');

var app = express();

app.set("view engine", "jade");

app.get("/", function (req, res) {
	res.render("index", {title: "Hello World!"});
});

app.listen(8080);

