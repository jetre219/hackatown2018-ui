const express = require("express");
var port = process.env.PORT || 8080;;

var app = express();
var groups = [];

app.use(express.static(__dirname));


app.use(function(req, res) {
  res.sendFile('index.html', {root: __dirname});
});

app.listen(port, function(err) {
    console.log("Listening on port", port);
});

