var express = require('express');
var router = express.Router();
var userModel = require('./users');
var suserModel = require('./susers');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.post('/reg',function(req,res){
  userModel.create({
    username:req.body.name,
    company:req.body.company
  })
  .then(function(user){
    res.send(user);
  })
});

router.post('/search',function(req,res){
  userModel.find({"company" : {$regex : req.body.search}})
  .then(function(o){
    res.send(o);
  })
})

router.get('/about',function(req,res){
  userModel.create({
    name:req.query.name,
    username:req.query.username,
    email:req.query.email
  }).then(function(data){
    res.send(req.query);
  })
})

module.exports = router;