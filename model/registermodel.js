var mongoose = require('mongoose');

// schema 

var register_schema = new mongoose.Schema({
    name : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String
    }

});

// module

module.exports = mongoose.model('register',register_schema);