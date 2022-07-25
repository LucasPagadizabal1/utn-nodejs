const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/node-utn",function(err){
    if(err){
        throw err
    }else{
        console.log("Database connect")
    }
})

module.exports = mongoose