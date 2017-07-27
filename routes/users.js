var express = require('express');
var router = express.Router();

var user = require('../services/user');

/* GET users listing. */
router.get('/', function(req, res) {
  console.log("came to route");
  user.UserGet(req,function(err,success){
    if(err){

    }else{
      //res.render('index', { title: success });
      //res.json({"mongo":success});
      res.send({"mongdb":success})
    }
  });
});

/* Register users . */
router.post('/register', function(req, res) {
  console.log(req.body);
  user.register(req,function(err,success){
    if(err){

    }else{
      res.send(success);
    }
  });
});

/* login users . */
router.post('/login', function(req, res) {
  console.log(req.body);
  user.login(req,function(err,success){
    if(err){

    }else{
      res.send(success);
    }
  });
});

module.exports = router;
