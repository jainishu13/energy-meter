var express = require('express');
var router = express.Router();

var consumption_details = require('../services/consumption_details');

/* GET users listing. */
router.get('/', function(req, res) {
  console.log("came to route");
  consumption_details.UserGet(req,function(err,success){
    if(err){

    }else{
      //res.render('index', { title: success });
      //res.json({"mongo":success});
      res.send({"mongdb":success})
    }
  });
});

module.exports = router;
