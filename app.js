var express                 = require("express"),
    bodyParser              = require("body-parser"),
    mongoose                = require("mongoose"),
    methodOverride          = require("method-override");

var app 					= express();

var indexRoutes				= require("./routes/index");


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+"/public"));
app.use(methodOverride("_method"));


app.use("/", indexRoutes);


app.listen(3000, "0.0.0.0", function(){
	console.log("Drug help server has started");
});