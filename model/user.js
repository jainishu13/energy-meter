var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    
        'username' : String,
        'email' : { type: String, required:true, unique: true },
        'password' : String,
        'device':[{
          "name":{type:String},
          "operatingFV":{type:String},
          "type":{type:String},
          "model":{type:String},
          "EnergyConsumptionPerHour":{type:String},
          "DateOfPurchase":{type:Date},
          "AvgLifeTime":{type:String},
          "location":[],
          "remarks":{type:String}
        }]

})

module.exports = mongoose.model('user',userSchema);