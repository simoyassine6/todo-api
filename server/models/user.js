let mongoose = require('mongoose');


let User = mongoose.model('user',
    {
        email:{
    type: String,
    trim : true,
    minlength : 1
}});

module.exports={User};
