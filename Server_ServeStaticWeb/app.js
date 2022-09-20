const express = require("express");
const favicon = require('serve-favicon');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(favicon(__dirname + '/frontside/favicon.ico'));
app.use('/frontside', express.static(__dirname + '/frontside'));

app.get("/", function(req, res){
  res.send('test');
});

console.log("Server Start!!");

app.listen(4000);