var express = require("express");
var router  = express.Router();


router.get("/", function(req, res){
	res.render("landing");
});

router.get("/make-submission", function(req, res){
	res.render("make-submission");
});

router.get("/FAQ", function(req, res){
	res.render("FAQ");
});
router.get("/MDMA", function(req, res){
	res.render("MDMA");
});
router.get("/allocate", function(req, res){
	res.render("allocate");
});

router.get("/1", function(req, res){
	res.render("landing1");
});

router.get("/analysis", function(req, res){
	res.render("analysis");
});
module.exports = router;