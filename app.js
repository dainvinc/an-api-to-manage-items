var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var apiRoutes = require('./routes/list');
    
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.send("Hola");
});
    
app.use('/api/list', apiRoutes);

app.listen(process.env.PORT, function() {
    console.log("App is running!");
});