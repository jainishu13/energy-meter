var deviceModel = require('../model/device');

var deviceService = {}

deviceService.read = function(userId,res){
    console.log("came to deviceService");
    deviceModel.find({"userId":userId},function(err,success){
        if(err){
            console.log(`error is ${err}`);
        }
        else{
        console.log(`success is ${success}`);
        res("",success);
        //response.render("hey i am from mongodb");
        }
    })

}

module.exports = deviceService;