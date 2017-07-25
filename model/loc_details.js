var mongoose = require('mongoose');

var loc_detailsSchema = mongoose.Schema({
    'loc_id' : String,
        'loc_name' : String,
        'type':String,
        'parent_id' :String

})

module.exports = mongoose.model('loc_details',loc_detailsSchema);   