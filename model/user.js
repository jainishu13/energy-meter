var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    
        'username' : String,
        'password' : String,
        'seg_profile' : String

})

module.exports = mongoose.model('user',userSchema);