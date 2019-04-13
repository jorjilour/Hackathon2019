var express = require("express");
var router  = express.Router();


router.get("/", function(req, res){
	res.render("landing");
});

router.get("/make-submission", function(req, res){
	res.render("make-submission");
});


module.exports = router;