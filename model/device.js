var mongoose = require('mongoose');

var deviceSchema = mongoose.Schema({
    'appliance_name':String,
    'operating_freq':String,
    'type':String,
    'model':String,
    'purchase_date':String,
    'avg_lifetime':String,
    'loc_id':String,
    'remarks':String,
    'power':String
})

module.exports = mongoose.model('device',deviceSchema);