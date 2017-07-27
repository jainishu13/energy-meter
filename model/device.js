var mongoose = require('mongoose');

var deviceSchema = mongoose.Schema({
    "userId":{type:String},
    "device":[
        {
            'appliance_name':{type:String},
            'operating_freq':{type:String},
            'type':{type:String},
            'model':{type:String},
            'purchase_date':{type:Date},
            'avg_lifetime':{type:String},
            'location':[],
            'remarks':{type:String},
            'power':{type:String}
        }
    ]
})

module.exports = mongoose.model('device',deviceSchema);