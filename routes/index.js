var express = require("express");
var router  = express.Router();


router.get("/", function(req, res){
	res.render("landing");
});

router.get("/make-submission", function(req, res){
	res.render("make-submission");
});

router.get("/MDMA", function(req, res){
	res.render("MDMA");
});

router.get("/1"), function(req, res){
	res.render("landing1")
});

module.exports = router;