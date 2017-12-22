var mongoose = require('mongoose');

var apiSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'It is required'
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

var MyApi = mongoose.model('MyApi', apiSchema);

module.exports = MyApi;