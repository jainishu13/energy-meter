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
        res("",success);
        }
    })
}

userService.register = function(req,res){
    let newUser = userModel({username:req.body.name,email:req.body.email,password:req.body.passwords.password});
    newUser.save(function(err,success){
        if(err){
            console.log(`error is ${err}`);
        }
        else{
        res("",success);
        }
    })
}

userService.login = function(req,res){
    userModel.find({"email":req.body.email,"password":req.body.password},function(err,success){
        if(err){
            console.log(`error is ${err}`);
        }
        else{
        res("",success);
        }
    })
}
module.exports = userService;