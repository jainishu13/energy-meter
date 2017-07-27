var express = require('express');
var router = express.Router();

var device = require('../services/device');

/* GET device listing. */
router.get('/:userId', function(req, res) {
  let userId = req.params.userId;
  device.read(userId,function(err,success){
    if(err){
      console.log("error in fetching device");
    }else{
      res.send(success);
    }
  });
});

module.exports = router;
