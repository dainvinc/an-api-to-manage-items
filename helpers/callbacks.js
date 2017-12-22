var db = require('../models/');

exports.getItems = function(req, res) {
    db.MyApi.find()
    .then(function(apis) {
        res.json(apis); 
    })
    .catch(function(err) {
        res.send(err);
    });
};

exports.createItem = function(req, res) {
    db.MyApi.create(req.body)
    .then(function(newItem) {
        res.json(newItem);
    })
    .catch(function(err) {
       res.send(err); 
    });
};

exports.getItem = function(req, res) {
    db.MyApi.findById(req.params.itemId)
    .then(function(foundItem) {
        res.json(foundItem);
    })
    .catch(function(err) {
        res.send(err);
    });
    console.log(db.MyApi._id);
};

exports.updateItem = function(req,res) {
    db.MyApi.findOneAndUpdate({_id: req.params.itemId}, req.body, {new: true})
    .then(function(item) {
        res.json(item);
    }).catch(function(err) {
        res.send(err);
    });
};

exports.deleteItem = function(req, res) {
    db.MyApi.remove({_id: req.params.itemId})
    .then(function() {
        res.json({message: 'Successfully deleted!'});
    })
    .catch(function(err){
        res.send(err);
    });
};

module.exports = exports;