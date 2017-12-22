var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/api-data');

mongoose.Promise = Promise;

module.exports.MyApi = require('./api');