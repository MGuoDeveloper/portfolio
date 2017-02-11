var express = require('express');
var router = express.Router();
var fs = require("fs");
var https=require('https');
var async = require("async");
var request=require('request');

// home.ejs
router.get('/', function(req, res){
    res.render("index");
});

router.get('/home', function(req, res){
    res.render("index");
});

module.exports = router;
