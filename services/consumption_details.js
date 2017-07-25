var consumption_details = require('../model/consumption_details');

var consumption_detailsService = {}

consumption_detailsService.UserGet = function(req,res){
    console.log("came to service");
    console.log(res);
  consumption_detailsModel.find({},function(err,success){
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

module.exports = consumption_detailsService;