var express = require('express');
var router = express.Router();

var device = require('../services/device');

/* GET users listing. */
router.get('/', function(req, res) {
  console.log("came to route");
  device.UserGet(req,function(err,success){
    if(err){

    }else{
      //res.render('index', { title: success });
      //res.json({"mongo":success});
      res.send({"mongdb":success})
    }
  });
});

module.exports = router;
