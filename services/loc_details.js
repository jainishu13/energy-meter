var userModel = require('../model/loc_details');

var loc_detailsService = {}

loc_detailsService.UserGet = function(req,res){
    console.log("came to service");
    console.log(res);
  loc_detailsModel.find({},function(err,success){
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

module.exports = loc_detailsService;