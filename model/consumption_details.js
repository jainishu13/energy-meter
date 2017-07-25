var mongoose = require('mongoose');

var consumptionSchema = mongoose.Schema({
    'device_id':String,
    'timestamp':String,
    'isPowerIn':String,
    'powerUsage':String    
})

module.exports = mongoose.model('consumption',consumptionSchema);