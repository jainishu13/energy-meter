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

module.exports = router;
