var mongoose = require('mongoose');
var mongoURL = `mongodb://localhost:27017/energy`;

// connection to mongo
var connectToMongo = function(){
    mongoose.connect(mongoURL);
}


var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  // we're connected!
  console.log("***--- MongoDb connection opened ---***");
});

db.on('disconnected', function() {
  // we're connected!
  console.log("***--- MongoDb connection disconnect ---***");
});



module.exports = function(){
  connectToMongo();
}