var userModel = require('../model/user');

var userService = {}

userService.UserGet = function(req,res){
    console.log("came to service");
    console.log(res);
    userModel.find({},function(err,success){
        if(err){
            console.log(`error is ${err}`);
        }
        else{
        //console.log(`success is ${success}`);
        res("",success);
        //response.render("hey i am from mongodb");
        }
    })
}

userService.register = function(req,res){
    let newUser = userModel({username:req.body.username,email:req.body.email,password:req.body.password.password});
    newUser.save(function(err,success){
        if(err){
            console.log(`error is ${err}`);
        }
        else{
        res("",success);
        }
    })
}
module.exports = userService;