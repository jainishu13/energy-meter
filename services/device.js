var userModel = require('../model/device');

var deviceService = {}

deviceService.UserGet = function(req,res){
    console.log("came to service");
    console.log(res);
    deviceModel.find({},function(err,success){
        if(err){
            console.log(`error is ${err}`);
        }
        else{
        //console.log(`success is ${success}`);
        res("","hey i am from mongodb");
        //response.render("hey i am from mongodb");
        }
    })

}

module.exports = deviceService;