var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var projects = require('./routes/projects.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views','./views');


app.use('/Images', express.static(__dirname + "/Images"));
app.use('/styles', express.static(__dirname + "/styles"));
app.use('/scripts', express.static(__dirname + "/scripts"));

app.get("/", function(req, res){
  res.render("profile")
})

app.get("/projects", function(req,res){
    res.render("projects")
})

app.get("/projects/:id", function(req, res){
  res.render(req.params.id)
})




app.get("*",function(req,res){
  res.send("404 page not found")
})

app.listen(8080)
