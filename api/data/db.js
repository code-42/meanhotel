var mongoose = require('mongoose');
var dburl = 'mongodb://localhost:27017/meanhotel';
var retry = null;
mongoose.connect(dburl);

// CONNECTION EVENTS
mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + dburl);
});
mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected');
});

<<<<<<< HEAD
// process.on('SIGINT', function(){
// 	mongoose.connection.close(function(){
// 		console.log('Mongoose disconnected through app termination (SIGINT)');
// 		process.exit(0);
// 	});
// });
//
// process.on('SIGTERM', function(){
// 	mongoose.connection.close(function(){
// 		console.log('Mongoose disconnected through app termination (SIGINT)');
// 		process.exit(0);
// 	});
// });
//
// process.once('SIGUSR2', function(){
// 	mongoose.connection.close(function(){
// 		console.log('Mongoose disconnected through app termination (SIGUSR2)');
// 		process.kill(process.pid, 'SIGUSR2');
// 	});
// });

=======
>>>>>>> meanAuth
// CAPTURE APP TERMINATION / RESTART EVENTS
// To be called when process is restarted or terminated
function gracefulShutdown(msg, callback) {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected through ' + msg);
    callback();
  });
}

// For nodemon restarts
process.once('SIGUSR2', function() {
  gracefulShutdown('nodemon restart', function() {
    process.kill(process.pid, 'SIGUSR2');
  });
});
// For app termination
process.on('SIGINT', function() {
  gracefulShutdown('App termination (SIGINT)', function() {
    process.exit(0);
  });
});
// For Heroku app termination
process.on('SIGTERM', function() {
  gracefulShutdown('App termination (SIGTERM)', function() {
    process.exit(0);
  });
});

<<<<<<< HEAD
// bring in schemas and models
require('./hotels.model.js');
require('./users.model');
=======
// BRING IN YOUR SCHEMAS & MODELS
require('./hotels.model');
require('./users.model');
>>>>>>> meanAuth
